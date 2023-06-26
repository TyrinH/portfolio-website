import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function About() {
  return (
    <>
      <Head>
        <title>Tyrin Holloway | About Page</title>
        <meta name="description" content="About me page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Insert some text here pls" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
                perferendis impedit? Veniam quaerat vel, sint odit quidem
                voluptatibus rem recusandae est ipsam illum iusto consequuntur
                vero. Incidunt recusandae numquam ipsam.
              </p>
              <p className="my-4 font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quas iusto dolores reprehenderit, error expedita
                quaerat corporis nobis ea iure recusandae veniam labore tempore
                ut dolore quae quia natus doloremque!
              </p>
              <p className="font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                facilis sapiente eius! Culpa adipisci nulla facilis. Aliquid,
                nostrum, saepe maxime soluta, ducimus in quis reprehenderit quia
                exercitationem praesentium a temporibus?
              </p>
            </div>
            <div>
              {/* <Image src={""} alt={""}/> // TODO: Add image p.s try to figure out the styling on your own*/}
            </div>
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
