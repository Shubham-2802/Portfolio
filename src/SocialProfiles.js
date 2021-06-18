import React, {Component} from 'react';
import SOCIAL from './data/socialProfiles';

class SocialProfile extends Component {
    
    render(){

        const {image,link} = this.props.profile;

        return(
            <div style={{ display:'inline-block', width:25, margin:20}}>
            <a href={link}><img src={image} alt="profileimage" style={{width:25,height:25}}/></a>
            </div>
        )
    }
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h2>Contact Me</h2>
                <div>
                    {
                        SOCIAL.map(SOC => {
                            return(
                                <SocialProfile key={SOC.id} profile={SOC}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;