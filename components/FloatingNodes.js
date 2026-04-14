"use client";

import { motion } from "framer-motion";

const pillars = ["Legacy Core", "Low-Code Apps", "AI Agents", "Workflow Engine"];
const outcomes = [
  { label: "Cycle Time", value: "-60%" },
  { label: "Delivery Speed", value: "3x" },
  { label: "Governance", value: "99.95%" }
];

export default function FloatingNodes() {
  return (
    <div className="relative h-[380px] overflow-hidden rounded-[2rem] border border-black/10 bg-[linear-gradient(135deg,rgba(255,248,224,0.88),rgba(232,247,244,0.92))] p-5 shadow-panel">
      <motion.div
        className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-amber-300/35 blur-2xl"
        animate={{ x: [0, 22, 0], y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-teal-300/35 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative h-full rounded-[1.55rem] border border-black/10 bg-white/72 p-4 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.24em] text-ink/50">Transformation Fabric</p>
            <p className="mt-1 text-sm font-semibold text-ink">Enterprise Orchestration</p>
          </div>
          <motion.span
            className="inline-flex items-center rounded-full border border-emerald-300/80 bg-emerald-50 px-2.5 py-1 text-[0.67rem] font-bold uppercase tracking-[0.16em] text-emerald-800"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Live
          </motion.span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar}
              className="rounded-xl border border-black/10 bg-white/92 px-3 py-2"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/45">Node</p>
              <p className="mt-0.5 text-sm font-semibold text-ink">{pillar}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-black/10 bg-gradient-to-r from-slate-900 to-slate-700 px-3 py-2.5 text-white">
          <div className="flex items-center justify-between">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/70">Pipeline Throughput</p>
            <p className="text-xs font-semibold text-emerald-300">+18%</p>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/20">
            <motion.div
              className="h-2 rounded-full bg-emerald-300"
              initial={{ width: "42%" }}
              animate={{ width: ["42%", "73%", "58%", "70%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {outcomes.map((item, index) => (
            <motion.div
              key={item.label}
              className="rounded-xl border border-black/10 bg-white/90 p-2.5 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + index * 0.08, duration: 0.35 }}
            >
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-ink/45">{item.label}</p>
              <p className="mt-1 text-base font-extrabold text-ink">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 text-center">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-ink/45">Signal-Driven Operating Layer</p>
      </div>
    </div>
  );
}
