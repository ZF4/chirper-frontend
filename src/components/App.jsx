import React, { Component, Fragment } from 'react';
import Chirp from './chirp';
import Timeline from './timeline';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: [{
                name:'Zach',
                text:'This is a chirp',
            },{
                name:'Zach',
                text:'This is a second chirp'
            },{
                name:'Zach',
                text:'This is a third chirp'
            }
            ]
        }
    }
handleName(e){
    this.setState({ name: e.target.value })
}
handleText(e){
    this.setState({ text: e.target.value })
}

submitInfo(){
    const newChirp = {
        name: this.state.name,
        text: this.state.text
    }

    this.setState({ chirps: [...this.state.chirps, newChirp]})
}

    render() {
        return (
            <Fragment>
                    <br></br>
                    <br></br>
                    <input type="text" className="name" value={this.state.name}
                    onChange={e=>this.handleName(e)}/>
                    <input type="text" className="chirp" value={this.state.text}
                    onChange={e=>this.handleText(e)}/>
                    {/* <Chirp/>
                    <Chirp/>
                    <Chirp/> */}
                    <button onClick={()=> this.submitInfo()}>Chirp</button>
                <Timeline chirps={this.state.chirps}/>
            </Fragment>
        )

    }
}



export default App;