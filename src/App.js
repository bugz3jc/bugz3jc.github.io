import React, {useState, useEffect} from 'react';
import {
  Container, Menu , Image, Divider, Segment, Button, Icon
} from 'semantic-ui-react';
import './App.css';
import About from './components/about';
import Projects from './components/projects';
import Home from './components/home';
import avatar from './files/avatar.png';
import resume from './files/johncris_tayco_resume.pdf';
// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
function App() {
  const [activeItem, setActiveItem] = useState('home');
  const [isOpen, setOpen] = useState(false);
  const size = useWindowSize();
  const isMobile = size.width <= 767;
  const content = {
    home: <Home isMobile={isMobile} about={() => setActiveItem('about')} projects={() => setActiveItem('projects') }/>,
    about: <About isMobile={isMobile}/>,
    projects: <Projects isMobile={isMobile} />
  }
  
  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    if(isMobile){
      setOpen(false);
    }

  }
  
  window.document.title = "John Cris Tayco - " + activeItem[0].toUpperCase() + activeItem.slice(1);
  return (
    <div className="App">
        <Container>
          <Menu vertical pointing className={`side-menu ${isMobile? 'mobile' : ''} ${isOpen ? 'active' : ''}`}>
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
            <Button as='a' href={resume} target="_blank" basic>
              <Icon name="download" />
              <span> Resume</span>
            </Button>
          </Button.Group>
          
          </Menu>
          <div className={`blocker  ${isMobile ? 'mobile' : ''} ${isOpen ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            ></div>
          <Segment className="contentContainer">
            <Button basic icon="bars" className="mobileMenuButton" onClick={() => setOpen(true)}/>
              {content[activeItem]}
          </Segment>
        </Container>
    </div>
  );
}

export default App;
