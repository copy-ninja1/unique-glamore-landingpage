import React from 'react'

function ContactUs(): JSX.Element {
    return (
        <section className='p-12 px-2 sm:px-4 md:px-32 relative'>
            <div className='bg-pink-600 rounded-xl h-auto w-full py-36 sm:py-20 md:py-12 bg-contact-image bg-no-repeat' style={{ backgroundSize: '269px auto' }}>
                {/* <img src="/flower/flower_3.png" /> */}

                <div className='text-center text-white'>
                    <h2 className='text-4xl font-semibold'>Contact Us</h2>
                    <p>Get Beautifull with a makeover you will like</p>
                </div>
                <form className='py-6 px-4 sm:px-12 md:px-44'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input className="focus:border-pink-100 focus:ring
                    focus:ring-pink-200 focus:ring-opacity-80 focus:outline-none w-full 
                    text-sm text-white placeholder-white border-none 
                    border-pink-50 rounded bg-white bg-opacity-40 py-2 pl-10"
                            type="text" aria-label="Filter projects"
                            placeholder="Full Name" />
                        <input className="focus:border-pink-100 focus:ring
                    focus:ring-pink-200 focus:ring-opacity-80 focus:outline-none w-full 
                    text-sm text-white placeholder-white border-none 
                    border-pink-50 rounded bg-white bg-opacity-40 py-2 pl-10"
                            type="text" aria-label="Filter projects"
                            placeholder="Email Address or phone Number" />
                    </div>
                    <textarea className='focus:border-pink-100 focus:ring
                    focus:ring-pink-200 focus:ring-opacity-80 focus:outline-none w-full 
                    text-sm text-white placeholder-white border-none 
                    border-pink-50 rounded bg-white bg-opacity-40 py-2 pl-10 my-4'>

                    </textarea>

                </form>
            </div>
            <img src="/flower/flower_1.webp" className='absolute top-3/4 right-0 h-40
             w-40 md:h-48 md:w-48 md:top-2/4 md:right-8' />

        </section>
    )
}
export default ContactUs