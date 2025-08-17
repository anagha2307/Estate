import React from 'react'

function About() {
  return (
    <div>
        <section id='about' className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'>
                <div className='text-center mb-2'>
                    <h2 className='text-4xl'><span className='font-bold'>About   </span>
                         <span className='underline'>Our Brand</span></h2>
                    <p className='my-2 font-light text-lg'>Passionate about Properties, Dedicated to Your Vision</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-start mt-6 md:items-start md:gap-20">
                    <img src="src/assets/brand_img.png" alt="Brand" className='w-96 sm:w-1/2 max-w-lg' />
                    <div className="flex flex-col items-center md:items-start mt-10 ">
                        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>10+</p>
                                <p>Years Of Excellence</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>15+</p>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>20+</p>
                                <p>Mn. Sq. Ft. Delivered</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'>25+</p>
                                <p>Ongoing projects</p>
                            </div>
                        </div>
                        <p className='my-10 max-w-lg text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae perspiciatis, veniam accusantium, dolorum libero obcaecati optio sunt amet minus magni nam delectus sed, quaerat sit officiis enim repellendus explicabo aut.
                        Eius at quo quod dignissimos voluptas accusamus aperiam, maxime quam? Repellendus unde ipsum numquam autem, enim soluta excepturi ipsa! Modi natus blanditiis aut at eius dolor!</p>
                        <button className='bg-blue-600 text-white px-8 py-2 rounded '>Learn More</button>
                    </div>                  
                </div>
            </section>      
    </div>
  )
}

export default About
