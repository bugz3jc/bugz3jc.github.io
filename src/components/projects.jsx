import React, {useState} from 'react';
import {
    Header, Card, Modal, Image, Icon
} from 'semantic-ui-react';

import portfolioimg from './../files/porfolio.png';

import marketimg from './../files/themarket.png';

import dashboardimg from './../files/marketdashboard.png';

const chipGenerator = (data) =>(
    <div>
        {data.map( (i,k) => (
            <span className="chip" key={k}>{i}</span>
        ) )}
    </div>
);
  
const Projects = () => {
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
            md: chipGenerator(["HTML/CSS", "Reactjs", "Semantic UI"])
        },
        {
            header: 'The Market',
            image: marketimg,
            description: 'An e-commerce platform for small online business. Built with dynamic product listing and filtering.',
            md: chipGenerator(["HTML/CSS","Reactjs", "Material UI", "RESTful API"])
        },
        {
            header: 'The Market Dashboard',
            image: dashboardimg,
            description: 'The backend Dashboard for The Market. With tools to manage products, customers and orders.',
            md: chipGenerator(["HTML/CSS","PHP","CodeIgniter","MySQL","Bootstrap 4"])
                
        },
        {
            header: 'The Market API (Coming Soon)',
            image: null,
            description: 'The RESTful API for The Market.',
            md: chipGenerator(["Python","MySQL"])
                
        },
        
    ];

    

    return(
        <div>
            <Header as='h2'>Projects</Header>

            <Card.Group itemsPerRow={3}>
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
                <div className="project-description">
                    <p>{content.description}</p>
                    {content.md}
                    <div className="grow"></div>
                    <div className="flex-container">
                        <div className="grow"></div>
                        
                        <button className="ui button primary">
                            <Icon name="external alternate" />
                            View Site
                            </button>
                        <button className="ui button black">
                            <Icon name="github" />
                            Code</button>
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