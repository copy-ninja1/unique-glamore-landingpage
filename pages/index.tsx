import Head from "next/head";
import { Hero, ContactUs, Customers } from '../components'
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
        <Hero />
        <Customers />
        <ContactUs />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered with  beauty and &nbsp;<span className='text-red text-2xl'> &hearts;</span>
        </a>
      </footer>
    </div>
  );
}
