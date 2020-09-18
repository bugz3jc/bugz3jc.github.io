import React, {useState} from 'react';
import {
  Container, Menu , Image, Divider, Segment, Button, Icon
} from 'semantic-ui-react';
import './App.css';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import avatar from './files/avatar.png';
import resume from './files/johncris_tayco_resume.pdf';
function App() {
  const [activeItem, setActiveItem] = useState('home');
  const content = {
    home: <Home />,
    about: <About />,
    projects: <Projects />
  }

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }
  
  return (
    <div className="App">
        <Container>
          <Menu vertical pointing className="side-menu">
            <div className={`branding ${activeItem === 'home' ? 'hide': ''}`}>
              <Image src={avatar} />
              <span className="light">John Cris</span>
              <span className="bold"> Tayco</span>
              <span className="subtitle">Full Stack Web Developer</span>
            </div>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={handleItemClick}
            >
              About Me
            </Menu.Item>
            <Menu.Item
              name='projects'
              active={activeItem === 'projects'}
              onClick={handleItemClick}
            >
              Projects
              </Menu.Item>
          <Divider />
          
          <div className="grow" ></div>
          <Button.Group>
            <Button as='a' href="https://www.linkedin.com/in/john-cris-tayco/" target="_blank" className="ui basic large icon button">
              <Icon name="linkedin" />
            </Button>
            <Button as='a' href="https://github.com/bugz3jc" target="_blank" className="ui basic large icon button">
              <Icon name="github" />
            </Button>
            <Button as='a' href={resume} target="_blank" className="ui basic large icon button">
              <Icon name="download" />
              <span> Resume</span>
            </Button>
          </Button.Group>
          
          </Menu>
          <Segment className="contentContainer">
              {content[activeItem]}
          </Segment>
        </Container>
    </div>
  );
}

export default App;
