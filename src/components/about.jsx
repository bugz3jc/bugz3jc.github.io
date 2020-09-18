import React from 'react';
import {
    Header, Segment, Button
} from 'semantic-ui-react';
import {ReactComponent as Cf} from './../files/coldfusion.svg';

import {ReactComponent as My} from './../files/mysql.svg';

import {ReactComponent as Sq} from './../files/sql.svg';
import resume from './../files/johncris_tayco_resume.pdf';
const About = () => {
    const iconNames = [
        {name:'html5', title:'HTML 5'},
        {name:'css3-alt', title:'CSS 3'},
        {name:'js-square', title:'JavaScript'},
        {name:'react', title:'Reactjs'},
        {name:'php', title:'PHP'},
        {name:'python', title:'Python'}
    ];
    return(
    <div className="gutter-top"> 
        <Header as='h2'>About Me</Header>
        <div className="flex-container" >
            
            <Segment basic textAlign="center">
            An experienced Web Developer with a demonstrated history of working in the outsourcing/offshoring industry for almost 4 years.
            Skilled in Cascading Style Sheets (CSS), JavaScript, HTML. Expert in Coldfusion, Php and SQL Server. I have worked with large teams with a systematic development process. Has
             a strong engineering professional with a Bachelor's degree focused in Information Technology. 
            </Segment>
        </div>

        <Header as='h2'> Technical Skills</Header>
        <div className="flex-container flex-wrap">
            {iconNames.map((i,k)=>(
                <span className="modIcon" key={k} >
                <i className={`fab fa-${i.name}`}></i>
                    {i.title}
                </span> 
            ))}
            <span className="modIcon">
                 <Cf className="svg"/>
                 ColdFusion
            </span>
            <span className="modIcon">
                 <My className="svg"/>
                 MySQL
            </span>
            <span className="modIcon">
                 <Sq className="svg"/>
                 SQL Server
            </span>
        </div>
        <Header as='h2'>I'd like to hear from you</Header>
        <div className="gutter-bottom">
            <Button as='a' href="https://www.linkedin.com/in/john-cris-tayco/" target="_blank" icon="linkedin" color='linkedin' content='LinkedIn'/>
             
            <Button as='a' href="https://github.com/bugz3jc" target="_blank" icon="github" color="black" content='Github' />
              
            <Button as='a' href={resume} target="_blank" icon='download' content='Resume' />
        </div>
    </div>
    )
}

export default About;