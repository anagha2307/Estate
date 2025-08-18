import React from 'react';
import Paper from '@mui/material/Paper';
function Projects() {
    
    return (
        <section id='proj' className='container mx-auto py-4 pt-20 md:px-20 lg:px-32 w-full overflow-hidden'>
            <div className='text-center mb-2'>
                <h2 className='text-4xl'><span className='font-bold'>Projects   </span>
                    <span className='underline'>Completed</span></h2>
                <p className='my-2 font-light text-lg'>Crafting Spaces, Building Legacies - Explore Our Portfolio</p>
            </div>
            <div className='flex justify-end items-center'>
                <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous Project'>
                    <img src="src\assets\left_arrow.svg" alt="previous" />
                </button>
                <button className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next Project'>
                    <img src="src\assets\right_arrow.svg" alt="next" />
                </button>
            </div>
            {/*projects container*/}
            <div className="flex gap-8 overflow-scroll transition-transform duration-500 ease-in-out my-2" 
            style={{transform: "translateX(0%)"}}>
                <div className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src="src/assets/project_img_1.jpg" alt="Skyline Haven" className="w-full h-auto mb-14" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">Skyline Haven</h2>
                            <p className="text-gray-500 text-sm">$2,50,000 
                                <span className="px-1">|</span> California
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src="src/assets/project_img_2.jpg" alt="Skyline Haven" className="w-full h-auto mb-14" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">Vesta Verde</h2>
                            <p className="text-gray-500 text-sm">$2,50,000 
                                <span className="px-1">|</span> San Francisco
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src="src/assets/project_img_3.jpg" alt="Skyline Haven" className="w-full h-auto mb-14" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">Serenity Suites</h2>
                            <p className="text-gray-500 text-sm">$2,50,000 
                                <span className="px-1">|</span> Chicago
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src="src/assets/project_img_4.jpg" alt="Skyline Haven" className="w-full h-auto mb-14" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">Central Square</h2>
                            <p className="text-gray-500 text-sm">$2,50,000 
                                <span className="px-1">|</span> Los Angeles
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src="src/assets/project_img_5.jpg" alt="Skyline Haven" className="w-full h-auto mb-14" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">Vesta Verde</h2>
                            <p className="text-gray-500 text-sm">$2,50,000 
                                <span className="px-1">|</span> California
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src="src/assets/project_img_6.jpg" alt="Skyline Haven" className="w-full h-auto mb-14" />
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">Skyline Haven</h2>
                            <p className="text-gray-500 text-sm">$2,50,000 
                                <span className="px-1">|</span> California
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </section >

    )
}

export default Projects
