import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const PageLoader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050A1F] flex flex-col items-center justify-center"
          data-testid="page-loader"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="font-heading text-5xl md:text-6xl font-black text-white tracking-tighter">
              SHANNON
            </div>
            <div className="text-[11px] md:text-xs tracking-[0.5em] text-[#D4AF37] font-semibold mt-2">
              ENGINEERING
            </div>
          </motion.div>
          <div className="mt-12 w-56 h-px bg-white/10 overflow-hidden">
            <div className="loader-bar h-full bg-[#D4AF37]"></div>
          </div>
          <p className="mt-4 text-[10px] tracking-[0.4em] text-white/40 uppercase font-heading">
            Building the Future
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
