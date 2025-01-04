

const Contact = () => {
  return (
    <section className="text-white  px-4 py-6 grid sm:grid-cols-2 max-w-[1000px] mx-auto">
       <section>
            <h2 className="text-2xl font-bold">Let's talk business</h2>
            <p className="text-gray-400 my-4">
                Now that you know a lot about me, let me know if 
                you are interested to 
                work with me.
            </p>
       </section>

         <form className="grid gap-4">
             <div className="grid gap-1">
                 <label className="text-sm" htmlFor="name">Name</label>
                 <input className="bg-[#181823] p-2 outline-none" id="name" type="text"/>
             </div>
             <div className="grid gap-1">
                 <label className="text-sm" htmlFor="email">Email</label>
                 <input className="bg-[#181823] p-2 outline-none" id="email" type="text"/>
             </div>
             <div className="grid gap-1">
                 <label className="text-sm" htmlFor="message">Message</label>
                 <textarea  className="bg-[#181823] p-2 outline-none" id="message" rows="10">
                 </textarea>
             </div>
             <button className="bg-indigo-700 py-4">LET'S GET STARTED</button>
         </form>
    </section>
  )
}

export default Contact