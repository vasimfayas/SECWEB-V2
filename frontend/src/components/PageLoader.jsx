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
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
          data-testid="page-loader"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <img src="/logo.png" alt="Shannon Engineering" className="h-28 md:h-32 w-auto mx-auto mb-2" />
          </motion.div>
          <div className="mt-12 w-56 h-px bg-neutral-200 overflow-hidden">
            <div className="loader-bar h-full bg-[#E11D2E]"></div>
          </div>
          <p className="mt-4 text-[10px] tracking-[0.4em] text-neutral-500 uppercase font-heading">
            Building the Future
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
