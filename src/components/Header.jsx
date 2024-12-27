

const Header = () => {
  return (
    <section className="text-white md:grid md:grid-cols-[1fr_2fr] md:min-h-[500px] max-w-[1200px] mx-auto">
        <div className='relative'>
            <img className="w-40 md:absolute h-auto rounded-lg shadow-lg md:top-1/2 md:-translate-y-1/2 md:w-[130%] md:max-w-none" src="/images/victor3.png" alt="" />
        </div>
        <section className="px-2 py-10 bg-gray-d md:grid md:place-content-center md:px-10">
            <h2 className="text-xl font-bold md:text-5xl md:relative md:z-20 md:text-yellow-300">I´m Víctor Hugo Murcio Mansilla, a  Mechatronic Engineer and FullStack Web Developer <span className="text-gray-300">based in México, City.</span>
                
            </h2>
            <p className="mt-4 md:mt-10 md:relative md:z-20 md:text-yellow-300">
    
                <strong>I´m a passionate and motivated individual with a strong background in mechatronics engineering and a growing interest in web development. If you have a great project that needs amazing skills, I´m your guy. </strong>
            </p>
        </section>
    </section>
  )
}

export default Header