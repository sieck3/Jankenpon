import React, { Component } from 'react'
import { _ } from 'core-js';
import '../css/aplication-container.css'

class AplicationContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null
        }

    }

    componentDidMount() {
        console.log("App container");

    }





    render() {
        return (
            <div>
                <h1>JANKENPON</h1>
              
             
                    <article >

                        <section>
                            {/* <h2>Piedra</h2> */}
                            <img src="https://cdn.discordapp.com/attachments/957134067034382336/1156412124067790909/PiedraV1.png?ex=651b77b7&is=651a2637&hm=9f09a9edf66b4610eb42fd5426faa011df904b02fa23960bc831e6cfea1038f2&" alt="Texto alternativo de la imagen"/>
                        </section>
                        <section>
                            {/* <h2>Papel</h2> */}
                            <img src="https://cdn.discordapp.com/attachments/957134067034382336/1156412123790987365/PapelV1.png?ex=651b77b7&is=651a2637&hm=55b88b7cc9b26a0ec54115403df1f965368ad4cdada982265b646c7a6bdbd43f&" alt="Texto alternativo de la imagen"/>
                        </section>
                        <section>
                            {/* <h2>Tijera</h2> */}
                            <img src="https://cdn.discordapp.com/attachments/957134067034382336/1156412123413487646/TijerasV1.png?ex=651b77b7&is=651a2637&hm=0c8bc1fd479c9d3eb12920dd0260d187f7e381e1e84e2fb7825a89088fc68e5f&" alt="Texto alternativo de la imagen"/>
                        </section>
                    </article>
         

            </div >
        )
    }
}

export default AplicationContainer;