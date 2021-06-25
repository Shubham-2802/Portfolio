import React from 'react';
import SOCIAL from './data/socialProfiles';

const SocialProfile = (props) => {
    
        const {image,link} = props.profile;

        return(
            <div style={{ display:'inline-block', width:25, margin:20}}>
            <a href={link}><img src={image} alt="profileimage" style={{width:25,height:25}}/></a>
            </div>
        )
    }

const SocialProfiles = () => {
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

export default SocialProfiles;