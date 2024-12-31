

const Projects = () => {
  return (
    <section className="text-white p-2 py-10 grid gap-10 sm:grid-cols-2 max-w-[1200px] mx-auto">
        {/* Seccion Izquierda */}
        <section className="grid gap-10">
            <div>
                <h3 className="uppercase text-sm text-gray-400 font-semibold">My Projects</h3>
                <h2 className="text-3xl font-semibold mt-2">Work that I've done the last year</h2>
            </div>
             {/* Project 1 Patient Manager*/}
            <article className="bg-gray-d  relative">
                <h4 className="text-center">Vet Pacient Monitoring</h4>
                <div className="bg-indigo-700 p-2">
                
                    <img src="/images/patientManager.jpg" alt="" />
                </div>
                 
                <section className="p-6">
                    
                         <p className="text-gray-400 text-sm"> This work was useful in helping to manage a veterinary clinic.
                             With this project, I learned to use React, Tailwind, and it was developed using CSS, HTML, 
                             and JavaScript. </p>
                         <a href="https://patientmanagermurcio.netlify.app/" className="bg-indigo-700 p-4 text-lg absolute bottom-0 right-0">
                           <i className='bx bx-link'></i>
                         </a>
                </section>
            </article>

             {/* Project 2 Product Store*/}
             <article className="bg-gray-d  relative">
                <h4 className="text-center">Product Store</h4>
                <div className="bg-indigo-700 p-2">
                
                    <img src="/images/minitienda.jpg" alt="" />
                </div>
                 
                <section className="p-6">
                    
                         <p className="text-gray-400 text-sm"> This work was useful in helping to manage a veterinary clinic.
                             With this project, I learned to use React, Tailwind, and it was developed using CSS, HTML, 
                             and JavaScript. </p>
                         <a href="https://merncrashv2.onrender.com/" className="bg-indigo-700 p-4 text-lg absolute bottom-0 right-0">
                           <i className='bx bx-link'></i>
                         </a>
                </section>
            </article>

       {/* Project 3 control de gastos*/}
             <article className="bg-gray-d  relative">
                <h4 className="text-center">Planificador de Gastos</h4>
                <div className="bg-indigo-700 p-2">
                
                    <img src="/images/plangastos.jpg" alt="" />
                </div>
                 
                <section className="p-6">
                    
                         <p className="text-gray-400 text-sm"> This work was useful in helping to manage a veterinary clinic.
                             With this project, I learned to use React, Tailwind, and it was developed using CSS, HTML, 
                             and JavaScript. </p>
                         <a href="https://controldegastosmurcio.netlify.app/" className="bg-indigo-700 p-4 text-lg absolute bottom-0 right-0">
                           <i className='bx bx-link'></i>
                         </a>
                </section>
            </article>

        </section>

        {/* Seccion derecha */}
        <section className="grid gap-10">

     {/* Project 3 criptomonedas*/}
            <article className="bg-gray-d  relative">
                <h4 className="text-center">CriptoCurrencies Quote</h4>
                <div className="bg-indigo-700 p-2">
                
                    <img src="/images/criptomonedas.jpg" alt="" />
                </div>
                 
                <section className="p-6">
                    
                         <p className="text-gray-400 text-sm"> This work was useful in helping to manage a veterinary clinic.
                             With this project, I learned to use React, Tailwind, and it was developed using CSS, HTML, 
                             and JavaScript. </p>
                         <a href="https://criptoquotev1.netlify.app/" className="bg-indigo-700 p-4 text-lg absolute bottom-0 right-0">
                           <i className='bx bx-link'></i>
                         </a>
                </section>
            </article>

            {/* Project 4 calculadora de propinas*/}
            <article className="bg-gray-d  relative">
                <h4 className="text-center">Calculadora de propinas</h4>
                <div className="bg-indigo-700 p-2">
                
                    <img src="/images/Calculadora de propinas.jpg" alt="" />
                </div>
                 
                <section className="p-6">
                    
                         <p className="text-gray-400 text-sm"> This work was useful in helping to manage a veterinary clinic.
                             With this project, I learned to use React, Tailwind, and it was developed using CSS, HTML, 
                             and JavaScript. </p>
                         <a href="https://propinasv2.netlify.app/" className="bg-indigo-700 p-4 text-lg absolute bottom-0 right-0">
                           <i className='bx bx-link'></i>
                         </a>
                </section>
            </article>

             {/* Project 5 carrito de compras*/}
             <article className="bg-gray-d  relative">
                <h4 className="text-center">Carrito de compras</h4>
                <div className="bg-indigo-700 p-2">
                
                    <img src="/images/carrito de compras.jpg" alt="" />
                </div>
                 
                <section className="p-6">
                    
                         <p className="text-gray-400 text-sm"> This work was useful in helping to manage a veterinary clinic.
                             With this project, I learned to use React, Tailwind, and it was developed using CSS, HTML, 
                             and JavaScript. </p>
                         <a href="https://carritodecomprasmurcio.netlify.app/" className="bg-indigo-700 p-4 text-lg absolute bottom-0 right-0">
                           <i className='bx bx-link'></i>
                         </a>
                </section>
            </article>
              <button className="border-[1px] border-indigo-700 p-4 max-w-max mx-auto">VIEW ALL PROJECTS</button>
        </section>
    </section>
  )
}

export default Projects