import React from 'react'

const Hero = (): JSX.Element => {
    return (<section className="relative grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-lightPink h-4/5 w-full overflow-hidden">
        <div className=" px-4 md:pl-32 z-10">
            <h1 className="text-pink-800  text-4xl md:text-7xl font-bold	">Makeup</h1>
            <h2 className="text-4xl md:text-6xl font-light">
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
        <div className='absolute  -top-10 -right-10 bg-pink-300 bg-opacity-30 md:bg-opacity-100 h-60 w-60 rounded-full z-0'></div>
    </section>)
}

export default Hero