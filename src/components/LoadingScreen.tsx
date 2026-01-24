import LoaderTwoDemo from "@/components/LoaderTwoDemo";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  isVisible: boolean;
}

export function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <LoaderTwoDemo />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
