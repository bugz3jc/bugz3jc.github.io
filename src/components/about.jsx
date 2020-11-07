import React, { useState } from 'react';
import {
    Header, Segment, Button, Icon, Form, Message
} from 'semantic-ui-react';
import {ReactComponent as Cf} from './../files/coldfusion.svg';
import {ReactComponent as My} from './../files/mysql.svg';
import {ReactComponent as Sq} from './../files/sql.svg';
import resume from './../files/johncris_tayco_resume.pdf';
const About = () => {
    const [formData, setFormData] = useState({
        code:'test',
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [msg, setMessage] = useState({});
    const iconNames = [
        {name:'html5', title:'HTML 5'},
        {name:'css3-alt', title:'CSS 3'},
        {name:'js-square', title:'JavaScript'},
        {name:'react', title:'Reactjs'},
        {name:'php', title:'PHP'},
        {name:'python', title:'Python'}
    ];

    const handleSubmit = (event) => {
        setLoading(true);
        const fd = new FormData();
        for ( var key in formData){
            fd.append(key, formData[key]);
        }

        const requestOptions = {
            method: 'PUT',
            body: fd,
        }
        fetch('http://api.johncristayco.me/contactme', requestOptions)
        .then((result) => result.json())
        .then((data) => {
            setLoading(false);
            setMessage(data);
            setFormData({
                code:'test',
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        })
        .catch((error) => {
            setLoading(false);
            setMessage({'message':'Apologies, something went wrong. You can check out links below or try again later. error -' + error, 'type':'warning'});
            
        });

        event.preventDefault();
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let data = {...formData};
        data[name] = value;
        setFormData(data);
    }

    return(
    <div className="gutter-top"> 
        <Header as='h2'>About Me</Header>
        <div>
            
            <Segment basic textAlign="center">
            An experienced Web Developer with a demonstrated history of working in the industry for almost 4 years.
            Skilled in Cascading Style Sheets (CSS), JavaScript, HTML. Expert in Coldfusion, Php and SQL Server. I have worked with large teams with a systematic development process.
            My experience in application development taught me that staying curious and connected are the keys to success. I pride myself on the energy and dedication I bring to each
            project I take on, no matter what the technology or the field.
            </Segment>

            <Segment basic textAlign="center">
                For more details you can check out my resume below.<br />
                <a href={resume} target="_blank" rel="noopener noreferrer" ><Icon name="download" />download resume</a>
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
        <Header as='h2' className="gutter-bottom">Let's work together!</Header>
        <span className="gutter-bottom">You can use this form to send an email directly to my inbox</span>
        <div className="gutter-bottom">
        
        <Form style={{maxWidth:450, margin: `0 auto`}} className="gutter-bottom" onSubmit={handleSubmit}>
            {
                Object.keys(msg).length !== 0 && <Message warning={msg.type === 'warning'} success={msg.type === 'success'} visible>
                                <p>
                                    {msg.message}
                                </p>
                            </Message>
            }
            <Form.Field>
                <input name="name" placeholder='Name *' required onChange={handleChange} value={formData.name}/>
            </Form.Field>
            <Form.Field>
                <input name="email" type="email" placeholder='Email *' required onChange={handleChange} value={formData.email} />
            </Form.Field>
            <Form.Field>
                <input name="subject" type="text" placeholder='Subject *' required onChange={handleChange} value={formData.subject} />
            </Form.Field>
            <Form.Field>
                <textarea name="message" row={3} placeholder="Message *"required onChange={handleChange} value={formData.message} ></textarea>
            </Form.Field>
                <Button loading={loading} disabled={loading}  id="submitbtn">Submit</Button>
        </Form>
                
            <div className={`gutter-bottom`} style={{display: 'block', margin: `0 auto`}}>Or you can check out the following:</div>
            <Button as='a' href="https://www.linkedin.com/in/john-cris-tayco/" target="_blank" rel="noopener noreferrer" icon="linkedin" color='linkedin' content='LinkedIn'/>
            <Button as='a' href="https://github.com/bugz3jc" target="_blank" rel="noopener noreferrer" icon="github" color="black" content='Github' />
            <Button as='a' href={resume} target="_blank" rel="noopener noreferrer" icon='download' content='Resume' />
            
        </div>
    </div>
    )
}

export default About;