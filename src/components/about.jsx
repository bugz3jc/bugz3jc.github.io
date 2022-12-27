import React from 'react';
import {
    Header, Segment, Button, Icon, 
} from 'semantic-ui-react';
import { RESUME, SKILLS } from '../constants/constants';
const About = () => {
    // const [formData, setFormData] = useState({
    //     code:'test',
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: ''
    // });
    // const [loading, setLoading] = useState(false);
    // const [msg, setMessage] = useState({});

    // const handleSubmit = (event) => {
    //     setLoading(true);
    //     const fd = new FormData();
    //     for ( var key in formData){
    //         fd.append(key, formData[key]);
    //     }

    //     const requestOptions = {
    //         method: 'PUT',
    //         body: fd,
    //     }
    //     fetch('http://api.johncristayco.me/contactme', requestOptions)
    //     .then((result) => result.json())
    //     .then((data) => {
    //         setLoading(false);
    //         setMessage(data);
    //         setFormData({
    //             code:'test',
    //             name: '',
    //             email: '',
    //             subject: '',
    //             message: ''
    //         });
    //     })
    //     .catch((error) => {
    //         setLoading(false);
    //         setMessage({'message':'Apologies, something went wrong. You can check out links below or try again later. error -' + error, 'type':'warning'});
            
    //     });

    //     event.preventDefault();
    // }

    // const handleChange = (event) => {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;

    //     let data = {...formData};
    //     data[name] = value;
    //     setFormData(data);
    // }

    return(
    <div className="gutter-top"> 
        <Header as='h2'>About Me</Header>
        <div>
            
            <Segment basic textAlign="center">
            An experienced Web Developer with a demonstrated history of working in the industry for almost 6 years. Within those years, I have been a Shopify Theme Developer for almost 3 years.
            Expert in Cascading Style Sheets (CSS), JavaScript, HTML and Shopify Theme Development ( Liquid ). I have worked with large teams with a systematic development process.
            My experience in application development taught me that staying curious and connected are the keys to success. I pride myself on the energy and dedication I bring to each
            project I take on, no matter what the technology or the field.
            </Segment>

            <Segment basic textAlign="center">
                For more details you can check out my resume below.<br />
                <a href={RESUME} target="_blank" rel="noopener noreferrer" ><Icon name="download" />download resume</a>
            </Segment>
        </div>

        <Header as='h2'> Technical Skills</Header>
        <div className='flex-container flex-wrap column gutter-bottom'>
            <div className="skillItem" style={{ fontWeight:"bold"}}>
                <span >Skill</span>
                <span>Experience</span>
            </div>
            {SKILLS.map((i,k)=>(
                <div className="skillItem" key={k}>
                    <span className="modIcon"  >
                        <i className={`fab fa-${i.name}`}></i>
                            {i.title}
                    </span> 
                    <span>{i.exp}</span>
                </div>
            ))}
            
        </div>
        <Header as='h2' className="gutter-bottom">Let's work together!</Header>
        <div className="gutter-bottom">
            <Button as='a' href="https://www.linkedin.com/in/john-cris-tayco/" target="_blank" rel="noopener noreferrer" icon="linkedin" color='linkedin' content='LinkedIn'/>
            <Button as='a' href="https://github.com/bugz3jc" target="_blank" rel="noopener noreferrer" icon="github" color="black" content='Github' />
            <Button as='a' href={RESUME} target="_blank" rel="noopener noreferrer" icon='download' content='Resume' />
            
        </div>
    </div>
    )
}

export default About;