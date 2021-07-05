import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import Jokes from './Jokes';

class App extends Component{

    state = {displayBio:false};

    // constructor() {
    //     super();
    //     this.state={displayBio:false};
    //     this.changeBioState=this.changeBioState.bind(this);
    // }  replaced with class properties and initializer syntax.

    changeBioState = () => {
        this.setState({displayBio:!this.state.displayBio});
    }

    // displayJokes = () => {
    //     <Jokes/>
    // }

    render(){
        return(
            <div>
                <h1>! PORTFOLIO !</h1>
                <Title />
                <p>Getting back on track within a month will be a challenge</p>
                <p>But i love challenges.</p>
                {
                (this.state.displayBio)
                ?(<div>
                    <p>Just going through the basics of React</p>
                    <p>Nonetheless React is an awesome framework.</p>
                    <p>After learning the framework, will be raedy for building good front end UI.</p>
                    <button onClick={this.changeBioState}>Show Less</button>
                </div>)
                :(<div>
                    <button onClick={this.changeBioState}>Read More</button>
                 </div>)
                 }
                 <hr/>
                 <Projects />
                 <hr/>
                 <SocialProfiles />
                 <hr/>
                 {/* <h2>Click to get 10 random jokes!</h2>
                 <button onClick={this.displayJokes}>Get Jokes</button> */}
                 <Jokes />
            </div>
        )
    }
}

export default App;