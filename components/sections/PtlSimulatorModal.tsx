"use client";

import React, { useState } from "react";

interface PtlSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BinItem {
  id: string;
  sku: string;
  name: string;
  stock: number;
  pickQty: number;
  active: boolean;
  picked: boolean;
}

export function PtlSimulatorModal({ isOpen, onClose }: PtlSimulatorModalProps) {
  const [activeTab, setActiveTab] = useState<"sim" | "arch" | "proto">("sim");

  const [bins, setBins] = useState<BinItem[]>([
    { id: "A-101", sku: "SKU-WDG-01", name: "Micro-Relay Module", stock: 42, pickQty: 2, active: true, picked: false },
    { id: "A-102", sku: "SKU-SNS-04", name: "IR Photo Sensor", stock: 18, pickQty: 0, active: false, picked: false },
    { id: "B-201", sku: "SKU-CBL-09", name: "Shielded Ribbon Cable", stock: 65, pickQty: 4, active: true, picked: false },
    { id: "B-202", sku: "SKU-PWR-02", name: "Buck Converter 12V", stock: 29, pickQty: 0, active: false, picked: false },
    { id: "C-301", sku: "SKU-VLV-15", name: "Solenoid Gate Valve", stock: 14, pickQty: 1, active: true, picked: false },
    { id: "C-302", sku: "SKU-LED-88", name: "High-Lux Optical Strip", stock: 53, pickQty: 0, active: false, picked: false },
    { id: "C-303", sku: "SKU-MCU-99", name: "IoT Controller Node", stock: 8, pickQty: 0, active: false, picked: false },
  ]);

  const [logs, setLogs] = useState<string[]>([
    "[SYS.INIT] WebSocket channel connected: wss://ptl.warehouse/stream/rack-04",
    "[ORDER.DISPATCH] Wave #4902 released: 3 lines, 7 total units to pick",
    "[RACK.LED] Bins A-101, B-201, C-301 illuminated in RED pick sequence",
  ]);

  const playAudioChime = (success: boolean) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(success ? 880 : 330, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.26);
    } catch {
      // Audio autoplay restrictions can be safely ignored
    }
  };

  const handlePickBin = (binId: string) => {
    setBins((prev) =>
      prev.map((bin) => {
        if (bin.id === binId && bin.active && !bin.picked) {
          playAudioChime(true);
          const newStock = Math.max(0, bin.stock - bin.pickQty);
          setLogs((l) => [
            `[PICK.ACK] Bin ${bin.id} confirmed: ${bin.pickQty}x ${bin.sku}. New stock: ${newStock}`,
            ...l.slice(0, 7),
          ]);
          return { ...bin, stock: newStock, picked: true, active: false };
        }
        return bin;
      })
    );
  };

  const handleResetWave = () => {
    setBins([
      { id: "A-101", sku: "SKU-WDG-01", name: "Micro-Relay Module", stock: 40, pickQty: 3, active: true, picked: false },
      { id: "A-102", sku: "SKU-SNS-04", name: "IR Photo Sensor", stock: 18, pickQty: 1, active: true, picked: false },
      { id: "B-201", sku: "SKU-CBL-09", name: "Shielded Ribbon Cable", stock: 61, pickQty: 0, active: false, picked: false },
      { id: "B-202", sku: "SKU-PWR-02", name: "Buck Converter 12V", stock: 29, pickQty: 2, active: true, picked: false },
      { id: "C-301", sku: "SKU-VLV-15", name: "Solenoid Gate Valve", stock: 13, pickQty: 0, active: false, picked: false },
      { id: "C-302", sku: "SKU-LED-88", name: "High-Lux Optical Strip", stock: 53, pickQty: 0, active: false, picked: false },
      { id: "C-303", sku: "SKU-MCU-99", name: "IoT Controller Node", stock: 8, pickQty: 1, active: true, picked: false },
    ]);
    setLogs((l) => [
      "[NEW.WAVE] Wave #4903 dispatched across Racks A, B, C",
      ...l.slice(0, 7),
    ]);
    playAudioChime(true);
  };

  if (!isOpen) return null;

  return (
    <div
      id="ptl-simulator-modal"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ptl-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-surface-container rounded-2xl border border-outline-variant/60 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="px-space-md py-space-sm sm:px-space-lg sm:py-space-md border-b border-outline-variant/30 flex items-center justify-between gap-space-sm bg-surface-container-low shrink-0">
          <div className="flex items-center gap-space-sm min-w-0">
            <div className="w-9 h-9 rounded-lg bg-primary-container/20 border border-primary-container/40 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[22px]">sensors</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3
                  className="font-headline-sm text-headline-sm text-on-surface font-bold truncate"
                  id="ptl-modal-title"
                >
                  PTL System for Inventory
                </h3>
                <span className="px-2 py-0.5 bg-primary-container/20 text-primary border border-primary-container/40 rounded font-label-caps text-[10px] uppercase hidden sm:inline-block">
                  NEXT.JS + FASTAPI
                </span>
              </div>
              <p className="font-code-inline text-[12px] text-on-surface-variant truncate">
                Pick-To-Light Warehouse Fulfillment &amp; Real-time Stock Sync Engine
              </p>
            </div>
          </div>
          <button
            className="w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            id="close-ptl-modal-btn"
            type="button"
            aria-label="Close PTL System Simulator Modal"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-space-md sm:px-space-lg py-2 border-b border-outline-variant/30 bg-surface-container-lowest/60 flex items-center gap-2 shrink-0">
          <button
            className={`px-3 py-1.5 rounded-lg font-label-md text-label-md transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
              activeTab === "sim"
                ? "text-primary bg-primary-container/15 border border-primary-container/30"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-transparent"
            }`}
            type="button"
            onClick={() => setActiveTab("sim")}
          >
            <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
            <span>Live Rack Simulator</span>
          </button>
          <button
            className={`px-3 py-1.5 rounded-lg font-label-md text-label-md transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
              activeTab === "arch"
                ? "text-primary bg-primary-container/15 border border-primary-container/30"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-transparent"
            }`}
            type="button"
            onClick={() => setActiveTab("arch")}
          >
            <span className="material-symbols-outlined text-[16px]">account_tree</span>
            <span>System Architecture</span>
          </button>
          <button
            className={`px-3 py-1.5 rounded-lg font-label-md text-label-md transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
              activeTab === "proto"
                ? "text-primary bg-primary-container/15 border border-primary-container/30"
                : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-transparent"
            }`}
            type="button"
            onClick={() => setActiveTab("proto")}
          >
            <span className="material-symbols-outlined text-[16px]">terminal</span>
            <span>Hardware Protocol</span>
          </button>
        </div>

        {/* Tab 1: Live Simulator */}
        {activeTab === "sim" && (
          <div className="p-space-md sm:p-space-lg overflow-y-auto flex flex-col gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-surface-container-low border border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                <span className="font-code-inline text-xs text-on-surface">
                  RACK CONTROLLER #04 // STATUS: ONLINE // SUB-SECOND WEBSOCKET SYNC
                </span>
              </div>
              <button
                className="px-3 py-1 bg-surface-container-high hover:bg-primary-container hover:text-white rounded text-xs font-code-inline text-primary border border-outline-variant/40 transition-colors cursor-pointer self-start sm:self-auto"
                type="button"
                onClick={handleResetWave}
              >
                ↻ Dispatch Next Wave
              </button>
            </div>

            {/* Bins Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {bins.map((bin) => (
                <div
                  key={bin.id}
                  className={`p-3 rounded-xl border transition-all ${
                    bin.active
                      ? "bg-surface-container-high border-primary-container shadow-[0_0_15px_-3px_rgba(239,68,68,0.35)]"
                      : bin.picked
                      ? "bg-surface-container-low/70 border-outline-variant/20 opacity-80"
                      : "bg-surface-container-low border-outline-variant/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-sm font-bold text-on-surface">
                      BIN {bin.id}
                    </span>
                    {bin.active && (
                      <span className="px-2 py-0.5 rounded bg-primary-container text-white text-[10px] font-label-caps uppercase animate-pulse">
                        PICK {bin.pickQty} UNITS
                      </span>
                    )}
                    {bin.picked && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-label-caps uppercase">
                        PICKED ✓
                      </span>
                    )}
                    {!bin.active && !bin.picked && (
                      <span className="text-[10px] font-code-inline text-outline">STANDBY</span>
                    )}
                  </div>
                  <div className="text-xs font-code-inline text-primary-fixed-dim mt-1">
                    {bin.sku}
                  </div>
                  <div className="text-xs text-on-surface-variant mt-0.5">{bin.name}</div>
                  <div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                    <span className="font-code-inline text-[11px] text-outline">
                      Stock: <span className="text-on-surface font-semibold">{bin.stock}</span>
                    </span>
                    {bin.active && (
                      <button
                        className="px-2.5 py-1 bg-primary text-white rounded font-label-caps text-[11px] uppercase hover:bg-primary-container transition-all cursor-pointer shadow-sm"
                        type="button"
                        onClick={() => handlePickBin(bin.id)}
                      >
                        Confirm Pick
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Telemetry Log Feed */}
            <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/40 flex flex-col gap-1.5 font-code-inline text-[11px]">
              <span className="text-primary font-bold tracking-wider">// WEBSOCKET TELEMETRY STREAM</span>
              {logs.map((log, idx) => (
                <div key={idx} className="text-on-surface-variant flex items-start gap-1.5">
                  <span className="text-primary">›</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: System Architecture */}
        {activeTab === "arch" && (
          <div className="p-space-md sm:p-space-lg overflow-y-auto flex flex-col gap-4 font-body-sm text-on-surface-variant">
            <h4 className="font-headline-sm text-base text-on-surface font-bold">
              High-Velocity Pick-To-Light Architecture Overview
            </h4>
            <p>
              The PTL system bridges Next.js client fulfillment displays with high-speed asynchronous
              FastAPI services and physical micro-controller hardware (ESP32/Arduino) located on warehouse racks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1">
                <span className="font-label-caps text-primary text-[10px] uppercase">1. FRONTEND LAYER</span>
                <span className="font-bold text-on-surface">Next.js App Router</span>
                <p className="text-xs">
                  Real-time picker dashboard, wave management, barcode scanner reconciliation, audio-haptic cues.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1">
                <span className="font-label-caps text-primary text-[10px] uppercase">2. ORCHESTRATION</span>
                <span className="font-bold text-on-surface">FastAPI + WebSockets</span>
                <p className="text-xs">
                  Asynchronous dispatch router, sub-second ledger updates, broadcast pub/sub to IoT controllers.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1">
                <span className="font-label-caps text-primary text-[10px] uppercase">3. DATA &amp; STORAGE</span>
                <span className="font-bold text-on-surface">PostgreSQL + Redis</span>
                <p className="text-xs">
                  ACID ledger transactions, inventory reservations, zero-loss idempotency on SKU scans.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Hardware Protocol */}
        {activeTab === "proto" && (
          <div className="p-space-md sm:p-space-lg overflow-y-auto flex flex-col gap-3 font-code-inline text-xs text-on-surface-variant">
            <span className="text-primary font-bold uppercase tracking-wider">// SERIAL / WEBSOCKET TELEGRAM FORMAT</span>
            <div className="p-3 rounded-lg bg-surface-container-lowest border border-outline-variant/40">
              <code>
                {`{
  "cmd": "PTL_LIGHT_DISPATCH",
  "rack_id": "RACK-04",
  "bin_id": "A-101",
  "color": "#EF4444",
  "blink_rate_ms": 250,
  "digits_display": 2,
  "timestamp": 17291823902
}`}
              </code>
            </div>
            <p className="text-xs text-on-surface-variant">
              Each bin node features an ultra-bright NeoPixel LED array, seven-segment numeric quantity display, and an infrared tactile confirmation button.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PtlSimulatorModal;
