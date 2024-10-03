import { motion } from "framer-motion";
import { useImage } from "react-image";
import MdiLoading from "../icons/MdiLoading";
import MdiAlert from "../icons/MdiAlert";

const variants = {
  loading: { y: "-100%", rotateZ: "0deg" },
  loaded: { y: "5%", rotateZ: "2deg" },
};

export function CafeCodingImage() {
  const { src, isLoading, error } = useImage({ srcList: "/cafecoding.webp" });

  return (
    <div className="relative w-4/5 mx-auto aspect-video flex flex-column justify-center items-center">
      {!error ? <MdiLoading className="animate-spin" /> : <MdiAlert />}
      <motion.div
        initial={"loading"}
        animate={isLoading || !!error ? "loading" : "loaded"}
        variants={variants}
        className="absolute w-full aspect-video border-8 border-current rounded-lg"
      >
        <img src={src} className="object-contain" />
      </motion.div>
    </div>
  );
}
