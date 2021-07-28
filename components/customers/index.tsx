import React from 'react'

import comments from './comments'

function Customers(): JSX.Element {
    return (
        <section className='p-12 px-2 sm:px-4 md:px-32 relative'>
            <div className=' h-auto w-full py-36 sm:py-20 md:py-12' >
                <div className='text-4xl md:text-6xl font-semibold text-center'>customers</div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-1 gap-4'>

                    {comments.map((comment, indx) => {
                        return <div className='p-2' key={indx}>
                            <div className='w-full h-auto shadow-lg border border-gray-200 rounded-lg'>
                                <div className='w-full md:h-72 p-3'>
                                    <img src={comment.ImageSrc} className='w-full h-full rounded-lg' alt="" />
                                </div>
                                <div className=' font-bold text-lg md:text-xl p-2'>
                                    {comment.name}
                                </div>
                                <div className='p-2 sm:h-50 md:h-60 text-lg md:text-xl'>
                                    {comment.message}
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>

            </div>
        </section>
    )
}
export default Customers