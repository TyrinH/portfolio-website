import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon} from "./Icons";
import {motion} from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
type CustomLinkProps = {
    href: string;
    title: string;
    className?: string;
}

const CustomLink = (props: CustomLinkProps ) => {
  const router = useRouter()
  return (
    <Link href={props.href} className={`${props.className} relative group`}>
      {props.title}

      <span className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300 ${router.asPath === props.href ? 'w-full' : 'w-0'} dark:bg-light`}>
        &nbsp;
      </span>
    </Link>
  );
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher()
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>
      <h2>
        <Logo />
      </h2>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://Twitter.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-4"
        >
          <TwitterIcon />{" "}
        </motion.a>
        <motion.a
          href="https://github.com/TyrinH"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-4"
        >
          {" "}
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/tyrinholloway/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-4"
        >
          <LinkedInIcon />{" "}
        </motion.a>
        {/* <Link href="/" target={"_blank"}>
          {" "}
          <PinterestIcon />
        </Link> */}
       <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
       className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light"  : "bg-light text-dark"}`}
       >
        {mode === "dark" ? (
          <SunIcon className="fill-dark" />) : (
          <MoonIcon className="fill-dark" />
        )}
       </button>
      </nav>
    </header>
  );
};

export default Navbar;
