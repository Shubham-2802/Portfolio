import React, {Component} from 'react';

class Jokes extends Component{
    state = { joke:{}, jokes:[]}

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke:json}))
        .catch(error => alert(error.message))
    }

    displayJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({jokes:json}))
        .catch(err => alert(err.message))
    }

    render(){

        const {setup,punchline} = this.state.joke

        return(
            <div>
                <h2>Highlighted Joke</h2>
                <p>{setup}<em>{punchline}</em></p>
                <button onClick={this.displayJokes}>Get More Jokes</button>
                {
                    this.state.jokes.map(jok => {
                        const {id,setup,punchline} = jok
                        return(
                            <p key={id}>{setup}<em>{punchline}</em></p>
                        )
                    })
                }
            </div>
        )
    }
}

export default Jokes;