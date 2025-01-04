

const Behance1 = () => {
  return (
    <section className='max-w-[1000px] mx-auto text-white sm:grid sm:grid-cols-2'>
        <article className="bg-pink-100 text-black py-10 px-2 grid gap-12 sm:grid sm:content-between">
            <div>
                <h3 className="text-2xl font-bold mb-4">Youtube</h3>
                        <p className="text-black-500 mb-4">
                        I manage a YouTube channel where I share projects and creations from my journey 
                        as a Mechatronics Engineering student. The content showcases my skills in robotics, 
                        programming, and electronics, featuring practical applications and innovative solutions. 
                        This platform allows me to demonstrate my technical expertise and passion for engineering 
                        while connecting with a community of like-minded individuals.
                        </p>
            </div>

            <a className="border-b-2 border-gray-300 max-w-max pb-1" href="https://www.youtube.com/@vmurciorobot/videos">Follow me on youtube</a>
        </article>

        <article> 
            <img className="w-full h-[400px] object-cover" src="/images/philosophy.png" alt="" />
        </article>
    </section>
  )
}

export default Behance1