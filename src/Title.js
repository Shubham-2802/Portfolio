import React,{Component} from 'react';

const TITLES = [
    "react",
    "angular",
    "vue"
]

class Title extends Component {

    state = { welcomemessage:0 }

    componentDidMount() {
        console.log("Component is mounted");

        this.changeWelcomeMessage();
    }

    changeWelcomeMessage = () => {
        this.CustomInterval = setInterval( () => {
            const message= (this.state.welcomemessage + 1) % TITLES.length;
            this.setState({welcomemessage:message})
        }, 4000); 
    }

    componentWillUnmount() {
        console.log("Component is unmounted");
        clearInterval(this.CustomInterval);
    }

    render(){
        console.log("Component is rendered");
        const wm=TITLES[this.state.welcomemessage]

        return(
            <p>Hello, Welcome to {wm}</p>
        )
    }
}

export default Title;