import React, { Component } from 'react';
import './projects.scss';

import Box from './../Box/box';

const projectd=[

    {
        id:1,
        title:"SJ_Portfolio",
        ImageUrl:'https://ik.imagekit.io/ggd6bd659a/LP_g_2JLc84L_fsjkZFQgw.png',
        link:'https://ajithlal.com/',
        codelink:"https://github.com/Ajithlal/SJ_Portfolio",
        discription:"This website which you are now seeing is the portfolio.It is a Portfolio website.",
        skill:"Skill that are used in making this projects are React , Javascript , Saas , react-scroll , html , css",
    }
]

class Projects extends Component {
    render() {
        return (
            <div id="project" className="project">
                <h1 className="project_heading">Projects</h1>
                { projectd.map(({id,...otherDataprops})=>(
                    <Box key={id} {...otherDataprops}/>
                ))
                }

                       
            </div>
        );
    }
}

export default Projects;