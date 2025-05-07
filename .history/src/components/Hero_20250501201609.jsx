import { Link } from "react-router-dom"



const Hero = () => {


    return (

        <section>


            <div id="hero">
                <h1>Stay in Sync. Build Faster</h1>

                <div>
                    <p id="p1">
                    DevSync keeps your team connected across every code change
                    </p>
           
                 </div>

                 <Link to="/dashboard" className='fake-button1'>Get Started</Link>


                 <div>
                        <a>
                            <img src='/ide2.png' id='ide1'/>
                        </a>

                 </div>



            </div>
            



        </section>

    )
}

export default Hero