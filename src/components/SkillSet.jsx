

const SkillSet = () => {
  return (
    <section className="text-white px-2 py-12 max-w-[1200px] mx-auto">
        {/* Subseccion superior */}
        <section className="md:grid md:grid-cols-[1fr_auto]">
            <article>
                <h3 className="font-bold text-3xl">Skillset</h3>
                <p className=" text-gray-400 mt-3">
                    With skills in over 4 different fields of design, I am the perfect
                    person to hire when it comes to a full fledged project. Whatever
                    your needs are, i can pretty much take on any challenge.
                </p>
            </article>

            <section className="grid gap-12 pt-6 md:grid-cols-2">
            
                <article>
                    <div>
                        <img src="/images/ficha.png" alt="" /> 
                    </div>
                    <h4 className="text-2xl font-semibold my-3">Frameworks</h4>
                    <ul className="text-gray-400">
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Tailwind</li>
                    </ul>
                </article>

                <article>
                    <div>
                        <img src="/images/ficha.png" alt="" />
                    </div>
                    <h4 className="text-2xl font-semibold my-3">Source Control</h4>
                    <ul className="text-gray-400">
                        <li>Git/github</li>
                        <li>Bitbucket</li>
                        <li>Scrum/Agil</li>
                    </ul>
                </article>

                <article>
                    <div>
                        <img src="/images/ficha.png" alt="" />
                    </div>
                    <h4 className="text-2xl font-semibold my-3">Languages</h4>
                    <ul className="text-gray-400">
                        <li>HTML</li>
                        <li>CSS/SAAS</li>
                        <li>JavaScript</li>
                    </ul>
                </article>

                <article>
                    <div>
                        <img src="/images/ficha.png" alt="" />
                    </div>
                    <h4 className="text-2xl font-semibold my-3">UX / UI</h4>
                    <ul className="text-gray-400">
                        <li>Wireframing</li>
                        <li>Adobe Suite</li>
                        <li>Elementor Expert</li>
                    </ul>
                </article>
            </section>
        </section>

        {/* Subseccion superior (logos) */}
        <section className="grid grid-cols-2 mt-12">
            <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
                <img src="/images/logo1.png" alt="" />
            </div>

            <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
                <img src="/images/logo2.png" alt="" />
            </div>

            <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
                <img src="/images/logo3.png" alt="" />
            </div>

            <div className="aspect-square grid place-content-center border-[1px] border-gray-800">
                <img src="/images/logo4.png" alt="" />
            </div>
        </section>
    </section>
  )
}

export default SkillSet