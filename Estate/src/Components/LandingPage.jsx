import React from 'react'
import Header from './Header'
 
function LandingPage() {
    return (
        <>
            <section id='home' className='w-full min-h-screen bg-cover bg-center mb-4 flex items-center overflow-hidden'
                style={{
                    backgroundImage: "url('header_img.png')"
                }}>
                <Header />                
                <div className='container-fluid text-center mx-auto py-4 px-6  inline-block text-white'>
                    <h1 className='font-bold italic text-center text-5xl md:text-6xl md:text-[82px] max-w-3xl'>Explore Homes that fit your Dreams</h1>
                    <h1 className='italic text-3xl my-4'>Where Living Begins</h1>
                    <button className="mx-auto border border-white  text-white font-semibold rounded px-6 py-2 
                    hover:bg-gray-200 hover:text-stone-900">
                        Read More
                    </button>
                </div>
            </section>            
        </>

    )
}

export default LandingPage
