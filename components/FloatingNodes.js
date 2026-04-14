"use client";

const topRow = [
  { label: "Legacy Core", highlighted: false },
  { label: "Low-Code Apps", highlighted: true }
];

const middleRow = ["AI Agents", "Workflow Engine", "Governance"];

export default function FloatingNodes() {
  return (
    <div className="h-[380px] rounded-3xl border border-black/10 bg-white/80 p-5 shadow-panel backdrop-blur">
      <div className="h-full rounded-[1.6rem] border border-black/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.82),rgba(220,230,239,0.45))] p-5">
        <div className="h-full rounded-[1.25rem] border border-black/10 bg-white/70 p-5">
          <div className="grid grid-cols-2 gap-3">
            {topRow.map((item) => (
              <div
                key={item.label}
                className={[
                  "flex h-14 items-center justify-center rounded-2xl border text-center text-[1.05rem] font-semibold",
                  item.highlighted
                    ? "border-ink bg-ink text-canvas"
                    : "border-black/10 bg-white/90 text-ink"
                ].join(" ")}
              >
                {item.label}
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-3">
            {middleRow.map((item) => (
              <div
                key={item}
                className="flex h-20 items-center justify-center rounded-2xl border border-black/10 bg-white/90 px-2 text-center text-[1.02rem] font-semibold text-ink"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-4 flex h-14 items-center justify-center rounded-2xl border border-black/15 bg-mist/70 text-center text-[1.05rem] font-semibold text-ink">
            Business Outcomes
          </div>
        </div>
      </div>
    </div>
  );
}
