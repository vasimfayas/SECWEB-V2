import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export const AnimatedCounter = ({ value, suffix = "", duration = 1.8, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const isFloat = value % 1 !== 0;
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = value * eased;
      setDisplay(isFloat ? Number(v.toFixed(1)) : Math.floor(v));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  const formatted = typeof display === "number" ? display.toLocaleString() : display;

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {formatted}
      {suffix}
    </motion.span>
  );
};
