import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated  by create react app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              {/* <Image src={""} alt={""}/> // TODO: Add image */}
            </div>
            <div className=" w-1/2 flex flex-col item-center">
              <AnimatedText
                text="Fake text that sounds good but doesn't mean anything."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                I am fake text that sounds good but does not mean anything.
                Should probably make this sound good or something.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                "
                download={true}
                >
                  Resume <LinkArrow className="w-6 m-1" />
                </Link>
                <Link href="mailto:tychnk@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline">
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
