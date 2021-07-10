import Head from "next/head";
// import model from '../public/model_1.png'
export default function Home() {
  return (
    // flex flex-col items-center justify-center min-h-screen py-2
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* flex flex-col items-center justify-center w-full flex-1 px-20 text-center */}
      <main className="w-full flex-1 ">
        <section className="relative grid grid-cols-2 gap-4 items-center bg-lightPink h-4/5 w-full overflow-hidden">
          <div className="pl-32">
            <h1 className="text-pink-800 text-6xl font-bold	">Makeup</h1>
            <h2 className="text-6xl font-light">
              BEYOND <br />
              IMAGINATION
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus esse distinctio iusto in asperiores expedita, eum odit
              quo nobis
            </p>
          </div>
          <div className="">
            <img src="/model_1.png" className="h-4/5 w-4/5 m-auto" />
          </div>
          <div className='absolute  -top-10 -right-10 bg-pink-300 h-60 w-60 rounded-full'></div>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
