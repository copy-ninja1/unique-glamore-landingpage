import React from 'react'

import comments from './comments'

function Customers(): JSX.Element {
    return (
        <section className='p-12 px-2 sm:px-4 md:px-32 relative'>
            <div className=' h-auto w-full py-36 sm:py-20 md:py-12' style={{ backgroundSize: '269px auto' }}>
                <div className='text-2xl md:text-6xl font-semibold text-center'>customers</div>
                <div className='flex'>

                    {comments.map((comment, indx) => {
                        return <div className='p-2' key={indx}>
                            <div className='w-full h-auto shadow-lg border border-gray-200 rounded-lg'>
                                <div className='w-full h-72 p-3'>
                                    <img src={comment.ImageSrc} className='w-full h-full rounded-lg' alt="" />
                                </div>
                                <div className='font-semibold text-lg p-2'>
                                    {comment.name}
                                </div>
                                <div className='p-2'>
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