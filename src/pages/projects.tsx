
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";
import MoodTracker from "../../public/images/mood-tracker-screenshot.jpg";

import React from 'react'
import { GithubIcon } from "@/components/Icons";
import TransitionEffect from "@/components/TransitionEffect";

type FeaturedProjectProps = {
    type: string;
    title: string;
    summary: string;
    img: StaticImageData;
    projectLink: string;
    githubLink: string;
}

const FeaturedProject = ({type, title, summary, img, projectLink, githubLink}:FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light  shadow-2xl p-12 dark:bg-dark dark:border-light dark:text-light
    lg:flex-col lg:p-8 xs:rounded 2xl xs:rounded-br-2xl xs:p-4
    
    ">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:border-light dark:text-light dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
      <Link href={projectLink} target={"_blank"} className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link href={projectLink} target={"_blank"} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
            <Link href={githubLink} target={"_blank"} className="w-10"> <GithubIcon/></Link>
            <Link href={projectLink} target={"_blank"} className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"> Visit Project</Link>
        </div>
      </div>
    </article>
  );
}

const Project = ({type, title, summary, img, projectLink, githubLink}:FeaturedProjectProps) => {
    return (
      <article
        className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative
        dark:bg-dark dark:border-light dark:text-light xs:p-4"
      >
         <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:border-light dark:text-light dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
        <Link
          href={projectLink}
          target={"_blank"}
          className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <Image src={img} alt={title} className="w-full h-auto"/>
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
          <Link
            href={projectLink}
            target={"_blank"}
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
          <Link
              href={projectLink}
              target={"_blank"}
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base"
            >
              {" "}
              Visit Project
            </Link>
            <Link href={githubLink} target={"_blank"} className="w-8 md:w-6">
              {" "}
              <GithubIcon />
            </Link>
       
          </div>
        </div>
      </article>
    );
  }

export default function Page() {
  return (
    <>
      <Head>
        <title>Tyrin Holloway | Projects Page</title>
        <meta name="description" content="About me page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col mb-16 items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Insert some text here pls" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12">
                    <FeaturedProject title="Mood Tracker" summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus inventore voluptas illo, harum ab dignissimos incidunt magni rerum cupiditate ex corrupti labore dolor. Sint at aliquam veritatis quis illo.' 
                    projectLink="/" githubLink="/" type="Featured Project" img={MoodTracker}/>
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project title="Mood Tracker" summary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus inventore voluptas illo, harum ab dignissimos incidunt magni rerum cupiditate ex corrupti labore dolor. Sint at aliquam veritatis quis illo.'
                    projectLink="/" githubLink="/" type="Featured Project" img={MoodTracker}/>
                </div>
                <div className="col-span-6 sm:col-span-12">
                    Project-2
                </div>
                <div className="col-span-12">
                    Featured Project
                </div>
                <div className="col-span-6">
                    Project-3
                </div>
                <div className="col-span-6">
                    Project-4
                </div>
            </div>

        </Layout>
      </main>
    </>
  );
}