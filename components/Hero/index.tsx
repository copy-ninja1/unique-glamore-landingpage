import React from 'react'
import BoxText from 'react-box-text'
const Hero = (): JSX.Element => {
    return (<section className="relative pt-12 md:pb-24 bg-pink-500 h-4/5 w-full overflow-hidden">
        <header className='z-50  text-pink-50 px-6'>
            <div className="w-40 p-4 mr-auto shadow-lg rounded-xl bg-pink-400">
                <img src="/logo.png" alt="unique" className="w-24 m-auto" />
                <h1 className="text-center font-semibold">YOUNIQUE</h1>
            </div>
        </header>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className=" px-4 md:pl-32 z-10">
                <h1 className="text-pink-50  text-5xl md:text-7xl font-bold">Smell Nice</h1>
                <h2 className="text-4xl md:text-6xl font-light">

                </h2>
                <p className="text-pink-100 text-lg">
                    "Perfumes tell stories, they resurrect memories and speak to the soul" ~Younique House of Glamour. When someone gets you angry, let your lashes do the talking, wear a makeup today
                    . ~Younique House of Glamour.
                </p>
            </div>
            <div className="">
                <img src="/model_1.png" className="h-4/5 w-4/5 m-auto" />
            </div>
            <div className='absolute  -top-10 -right-10 bg-pink-300 bg-opacity-30 md:bg-opacity-100
         h-60 w-60 rounded-full z-0'></div>
        </div>
        <img src='/bg/curve.svg' className="w-screen absolute -bottom-2 md:-bottom-8 z-10" />
    </section>)
}

export default Hero