import React from 'react';
import PROJECTS from './data/projects';

const Project = (props) => {

        //console.log(this.props);
        const {title,description,link,image} = props.project;

        return(
            <div style={{ display:'inline-block', width:200, margin:10}}>
                <h2>{title}</h2>
                <img src={image} alt="Title image" style={{ width:150,height:120}}></img>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }

const Projects = () => {

        return(
            <div>
                <h2>Project List</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project key={PROJECT.id} project={PROJECT}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }


export default Projects;