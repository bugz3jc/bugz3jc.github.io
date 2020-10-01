import React from 'react';
import {
    Button
} from 'semantic-ui-react';
const Home = (props) => {
    return(
        <div className="flex-container home">
            <span>Hi, I am </span>
            <span>John Cris Tayco</span>
            <span className="gutter-bottom">A Web Developer</span>
            <div>
                <Button onClick={props.about}>About Me</Button>
                <Button primary onClick={props.projects}>Projects</Button>
            </div>
        </div>
        )
}
 
export default Home;