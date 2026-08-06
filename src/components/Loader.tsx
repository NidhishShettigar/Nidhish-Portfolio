import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, -6] }}
          transition={{ duration: 2, times: [0, 0.3, 0.75, 1], ease: "easeInOut" }}
          className="font-display font-semibold tracking-tight text-foreground"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", letterSpacing: "-0.03em" }}
        >
          Nidhish S Shettigar
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Loader;
