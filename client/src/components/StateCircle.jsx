import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatCircle({
  value,
  suffix = "",
  label,
  max = 100,
  duration = 1.8,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  // circle config (small size)
  const size = 70;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // progress based on value
  const progress = Math.min(value / max, 1);
  const offset = circumference * (1 - progress);

  // number animation
  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();

    const animate = (time) => {
      const p = Math.min((time - startTime) / (duration * 1000), 1);
      setCount(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg width={size} height={size} className="-rotate-90">
          {/* background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#2a2a2a"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* animated progress ring */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#fff"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.25}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration, ease: "easeOut" }}
          />
        </svg>

        {/* value inside */}
        <div className="absolute inset-0 flex items-center justify-center md:text-lg font-semibold text-white">
          {count}
          {suffix}
        </div>
      </div>

      <p className="text-xs text-white font-semibold text-center max-w-22.5">
        {label}
      </p>
    </div>
  );
}
