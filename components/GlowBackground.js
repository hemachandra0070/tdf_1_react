"use client";

import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.span
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(217,83,30,0.45),_transparent_70%)]"
        animate={{ x: [0, 45, -10, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute right-[-5rem] top-[30%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(14,143,124,0.42),_transparent_72%)]"
        animate={{ x: [0, -40, 20, 0], y: [0, -35, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute left-[35%] bottom-[-8rem] h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(71,127,214,0.25),_transparent_68%)]"
        animate={{ x: [0, 25, -25, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
