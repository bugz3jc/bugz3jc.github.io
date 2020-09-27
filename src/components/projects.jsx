import React, {useState} from 'react';
import {
    Header, Card, Modal, Image, Icon
} from 'semantic-ui-react';

import portfolioimg from './../files/porfolio.png';

import marketimg from './../files/themarket.png';

import dashboardimg from './../files/marketdashboard.png';

const chipGenerator = (data) =>(
    <div style={{marginBottom: '8px'}}>
        {data.map( (i,k) => (
            <span className="chip" key={k}>{i}</span>
        ) )}
    </div>
);


  
const Projects = (props) => {
    const [modalState, setModalState] = useState({
        open: false,
        content: {},
      });
      const { open, content } = modalState

     
    const cardContent = [
        {
            header: 'Portfolio',
            image: portfolioimg,
            description: 'This shows information about my professional career, my projects and other details.',
            md: chipGenerator(["HTML/CSS", "Reactjs", "Semantic UI"]),
            actions: <a href={`https://github.com/bugz3jc/bugz3jc.github.io`} target="_blank" className="ui black button"><Icon name="github" /> Code</a>
        },
        {
            header: 'The Market',
            image: marketimg,
            description: 'An e-commerce platform for small online business. Built with dynamic product listing and filtering.',
            md: chipGenerator(["HTML/CSS","Reactjs", "Material UI", "RESTful API"]),
            actions: <a href={`https://github.com/bugz3jc/the-market`} target="_blank" className="ui black button"><Icon name="github" /> Code</a>
        },
        {
            header: 'The Market Dashboard',
            image: dashboardimg,
            description: 'The backend Dashboard for The Market. With tools to manage products, customers and orders.',
            md: chipGenerator(["HTML/CSS","PHP","CodeIgniter","MySQL","Bootstrap 4"]),
            
                
        },
        {
            header: 'The Market API',
            image: null,
            description: 'The RESTful API for The Market.',
            md: chipGenerator(["Python","MySQL","Flask API"]),
            actions: <a href={`https://github.com/bugz3jc/market-api`} target="_blank" className="ui black button"><Icon name="github" /> Code & Documentation</a>
                
        },
        
    ];

    

    return(
        <div>
            <Header as='h2'>Projects</Header>

            <Card.Group itemsPerRow={props.isMobile ? 1 : 3}>
                {cardContent.map((i,k)=> (
                    <Card
                        header={i.header}
                        image={i.image}
                        href="#"
                        key={k} 
                        onClick={() => setModalState({open:true, content: i }) }/>
                ))}
            </Card.Group>
            
        <Modal
            open={open}
            onClose={() => setModalState({open:false, content: {}})}
        >
        <Modal.Header>{content.header}</Modal.Header>
        <Modal.Content>
            <div className="flex-container align-stretch">
                <Image src={content.image} size="medium"/>
            <div className={`project-description ${props.isMobile ? 'mobile' : ''}`}>
                    <p>{content.description}</p>
                        {content.md}
                    <div className="grow"></div>
                    <div className="flex-container ">
                        <div className="grow"></div>
                        
                        {content.actions && content.actions}
                    </div>
                    
                </div>
            </div>
        </Modal.Content>
        <Modal.Actions>
          <button className="ui button" onClick={() =>  setModalState({open:false, content: {}})}>
              Close
          </button>
        </Modal.Actions>
      </Modal>
           
        </div>
        )
}

export default Projects;