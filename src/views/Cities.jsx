import React from 'react'

function Cities() {
  return (
    <>
            <main className="grow flex flex-wrap justify-center gap-5">
                <div className='flex items-center w-full h-96 justify-center xl:h-[500px] flex-wrap'>
                    <img src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQWz3mfrE0TpNrF-Y6aeZ6cPkBAvkAVIuE-VOB4ZXZw2z2My5J6PUnSv7VN6tHwTkXT" className='xl:h-[500px] w-full h-96 object-cover' alt="" />
                    <section className='flex flex-col gap-5  justify-center mx-2 bg-black text-white rounded px-1 absolute opacity-90'>
                        <h2 className='self-center text-2xl font-bold'>Cities</h2>
                        <p>Collection of the most beautiful places and experience</p>
                    </section>
                </div>
            </main>
    </>
  )
}

export default Cities