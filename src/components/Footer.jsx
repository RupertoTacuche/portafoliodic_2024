

const Footer = () => {
  return (
    <section className="text-white bg-gray-d py-20 px-3">
        <article className="grid gap-6 max-w-[1200px] mx-auto sm:grid-cols-2">
            <section>
                <div>
                    <img src="/images/arduinofondonegro.jpeg" alt=" " />
                </div>
                <div className="flex gap-4 py-6"> 
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>

            </section>

            <section className="grid grid-cols-2">
                <article className="grid gap-6">
                    <a href="#" >Home</a>
                    <a href="#" >About</a>
                    <a href="#" >Work</a>
                    <a href="#" >Process</a>
                </article>
                <article className="grid gap-6">
                    <a href="#" >Store</a>
                    <a href="#" >Blog</a>
                    <a href="#" >Reading List</a>
                   
                </article>
            </section>
        </article>
    </section>
  )
}

export default Footer