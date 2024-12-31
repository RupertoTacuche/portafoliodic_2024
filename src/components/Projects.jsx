

const Projects = () => {
  return (
    <section className="text-white">
        {/* Seccion Izquierda */}
        <section>
            <div>
                <h3>My Projects</h3>
                <h2>Work that I've done the last year</h2>
            </div>

            <article className="bg-gray-d text-white relative">
                <h4 className="text-center">Vet Pacient Monitoring</h4>
                <div className="bg-indigo-700 p-2">
                
                    <img src="/images/patientManager.jpg" alt="" />
                </div>
                 {/* Project 1 Patient Manager*/}
                <section className="p-6">
                    
                         <p className="text-gray-400 text-sm"> This work was useful in helping to manage a veterinary clinic.
                             With this project, I learned to use React, Tailwind, and it was developed using CSS, HTML, 
                             and JavaScript. </p>
                         <a href="#" className="bg-indigo-700 p-4 text-lg absolute bottom-0 right-0">
                           <i className='bx bx-link'></i>
                         </a>
                </section>
            </article>

        </section>

        {/* Seccion derecha */}
        <section>

        </section>
    </section>
  )
}

export default Projects