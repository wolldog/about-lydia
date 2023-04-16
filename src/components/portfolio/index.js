import React from 'react';
import { Projects } from './Projects';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
                <ul>
                    {Projects.map((project, index)=>{
                        return (
                            <li key={index}>
                                <a href={project.github}> {project.title} </a>
                            </li>
                        )
                    })}
                </ul>
        </div>
    );
}