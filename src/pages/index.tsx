import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated  by create react app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              {/* <Image src={""} alt={""}/ className="w-full h-auto lg:hidden md:inline-block md:w-full"> // TODO: Add image */}
            </div>
            <div className=" w-1/2 flex flex-col item-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Fake text that sounds good but doesn't mean anything."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                I am fake text that sounds good but does not mean anything.
                Should probably make this sound good or something.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark  hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                "
                download={true}
                >
                  Resume <LinkArrow className="w-6 m-1" />
                </Link>
                <Link href="mailto:tychnk@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
