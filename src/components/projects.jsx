import React, {useState} from 'react';
import {
    Header, Card, Modal, Image, Icon
} from 'semantic-ui-react';
import { SHOPIFY_PRJ } from '../constants/constants';

import portfolioimg from './../files/porfolio.png';
import { ChipGenerator } from './../utilities/utilities';


  
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
            description: <p>This shows information about my professional career, my projects and other details.</p>,
            md: ["HTML/CSS", "Reactjs", "Semantic UI"],
            actions: <div>
                        <a href={`https://github.com/bugz3jc/bugz3jc.github.io`} target="_blank" rel="noopener noreferrer" className="ui black button"><Icon name="github" /> Code</a>
                    </div>,
        },
        
    ];

    

    return(
        <div className='gutter-top'>
            <Header as='h2' >Projects</Header>
            <Header as='h3' className='text-left'>Shopify</Header>
            <Card.Group itemsPerRow={props.isMobile ? 1 : 3}>
                {SHOPIFY_PRJ.map((i,k)=> (
                    <Card
                        header={i.header}
                        image={i.image}
                        href="#"
                        key={k} 
                        onClick={() => setModalState({open:true, content: i }) }/>
                ))}
            </Card.Group>
            <Header as='h3' className='text-left'>Others</Header>
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
            className={content.full ? "full": ""}
        >
            <Modal.Header>{content.header}</Modal.Header>
            <Modal.Content>
                <div className="flex-container align-top">
                    <div>
                    <Image src={content.image} size="big"/>
                    { content.externalLinks }
                    </div>
                    <div className={`project-description ${props.isMobile ? 'mobile' : ''}`}>
                        <ChipGenerator data={content.md} />
                        {content.description}
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