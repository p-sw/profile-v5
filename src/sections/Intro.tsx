import { useImage } from "react-image";
import { MdiAlert } from "../icons/MdiAlert";
import { MdiLoading } from "../icons/MdiLoading";
import { motion, Variants } from "framer-motion";
import { MdiDiscord } from "../icons/MdiDiscord";
import { MdiGithub } from "../icons/MdiGithub";
import { MdiInstagram } from "../icons/MdiInstagram";
import { Fa6BrandsXTwitter } from "../icons/Fa6BrandsXTwitter";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const variants: Variants = {
  loading: { opacity: 0, scale: 0 },
  loaded: { opacity: 1, scale: 1 },
};

const profilePicLayoutId = "sections-intro-profilepic";

const NAME = "Shinwoo PARK";

const introTitle = "Hello!";
const introDesc = `I'm ${NAME}, a growing frontend engineer with a little bit of backend & server knowledge.`;

const GH_URL = "https://github.com/p-sw";
const INSTA_URL = "https://www.instagram.com/pswdev/";
const X_URL = "https://x.com/psw_kr";
const DISCORD_URL = "https://discord.gg/A6YsRwEKNx";

function ProfilePicFocused({
  focused,
  setFocus,
}: {
  focused: boolean;
  setFocus: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.div
      key="profilePicOverlay"
      initial={{ backdropFilter: "blur(0px)" }}
      animate={{ backdropFilter: focused ? "blur(12px)" : "blur(0px)" }}
      className="fixed w-screen h-screen flex flex-column justify-center items-center z-10 top-0 left-0 pointer-events-none data-[focused=true]:pointer-events-auto"
      onClick={() => setFocus(false)}
      data-focused={focused}
    >
      {focused ? (
        <motion.div
          layoutId={profilePicLayoutId}
          className="border-4 border-current rounded-md aspect-square max-w-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <img src="/profile.webp" className="object-contain" />
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export function Intro() {
  const { src, error, isLoading } = useImage({
    srcList: "/profile.webp",
  });
  const [profilePicFocused, setProfilePicFocused] = useState(false);

  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);

  return (
    <section className="w-full flex flex-col lg:flex-row-reverse items-center text-center lg:text-left gap-8 mt-4 px-2">
      <div className="w-32 grid grid-cols-4 grid-rows-[1fr_auto]">
        <div className="col-span-4 w-full aspect-square flex flex-row justify-center items-center relative">
          {!error ? <MdiLoading className="animate-spin" /> : <MdiAlert />}
          <ProfilePicFocused
            focused={profilePicFocused}
            setFocus={setProfilePicFocused}
          />
          {profilePicFocused ? null : (
            <motion.div
              variants={variants}
              initial={
                firstRender || isLoading || !!error ? "loading" : "loaded"
              }
              animate={isLoading || !!error ? "loading" : "loaded"}
              className="border-4 border-current rounded-md absolute z-20"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.75 }}
              onClick={() => !isLoading && !error && setProfilePicFocused(true)}
              layoutId={profilePicLayoutId}
            >
              <img src={src} className="object-contain" />
            </motion.div>
          )}
        </div>
        <motion.a
          href={DISCORD_URL}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.5 }}
          className="mx-auto mt-2 text-lg h-fit"
        >
          <MdiDiscord />
        </motion.a>
        <motion.a
          href={GH_URL}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.5 }}
          className="mx-auto mt-2 text-lg h-fit"
        >
          <MdiGithub />
        </motion.a>
        <motion.a
          href={INSTA_URL}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.5 }}
          className="mx-auto mt-2 text-lg h-fit"
        >
          <MdiInstagram />
        </motion.a>
        <motion.a
          href={X_URL}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.5 }}
          className="mx-auto mt-2 text-lg h-fit"
        >
          <Fa6BrandsXTwitter />
        </motion.a>
      </div>
      <div className="w-full max-w-sm mx-auto">
        <h1 className="font-bold text-6xl">{introTitle}</h1>
        <p className="font-medium text-lg">{introDesc}</p>
      </div>
    </section>
  );
}
