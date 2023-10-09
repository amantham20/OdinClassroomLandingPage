import React from 'react'

import attention from '../assets/attention-icon.png'

interface ErrorWindowProps {
    error: string,
    person?: string

}

const ErrorWindow: React.FC<ErrorWindowProps> = ({ error, person }) => {
    return (
        <div className='lg:w-[450px] w-80 md:w-[400px]  bg-[#292929] mx-2 my-2 rounded-lg text-white'>
            <div className='py-3 w-full pl-4 bg-[#212121] rounded-t-lg flex gap-[5px] px-2'>
                <span className='w-3 h-3 bg-red-500 rounded-full' />
                <span className='w-3 h-3 bg-yellow-400 rounded-full' />
                <span className='w-3 h-3 bg-green-600 rounded-full' />
            </div> {/* top bar */}


            {/* <div className="flex flex-row">
                <img src={attention} alt="" className='h-11'/>
                <div className='flex flex-col mx-auto my-4 py-5'>
                    <p className='items-center justify-center text-center '>{error}</p>

                    {person && <p className='justify-end text-end pr-10'>{person}</p>}
                </div>
            </div> */}

            <div className="flex items-center my-10 lg:pb-10 pr-5">
                <img src={attention} alt="" className='h-11 mr-3 ml-4' /> {/* Add right margin for spacing */}
                <div className='flex flex-col'>
                    <p className='text-center'>{error}</p>
                    {person && <p className='text-right mt-2'>{person}</p>} {/* Add top margin for spacing */}
                </div>
            </div>

        </div>
    )
}

export default ErrorWindow