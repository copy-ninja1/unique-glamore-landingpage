import React from 'react'

function Author(): JSX.Element {
    return (
        <section className='w-full relative py-12'>
            <div className=" w-full m-auto md:w-2/6 ">
                <img src="/princess.webp" className=' h-60 w-60 m-auto ' alt="" />
                <h2 className="text-center my-4 font-semibold text-4xl md:text-6xl text-pink-700">Hi</h2>
                <p className="text-center text-lg md:text-xl text-pink-900">
                    I'm Princess, a  make up artist and perfume producer. We offer make up services (casual, party, bridal and special effect make up) We produce and sell perfumes, and currently have launched perfume line. We offer make up and perfume production trainings too.</p>
            </div>
        </section>
    )
}
export default Author