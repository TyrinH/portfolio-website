import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon} from "./Icons";
import {motion} from "framer-motion";
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
       group-hover:w-full transition-[width] ease duration-300 ${router.asPath === props.href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  );
}

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
        <motion.a
          href="https://Google.com"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-4"
        >
          {" "}
          T
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
