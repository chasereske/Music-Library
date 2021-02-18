import axios from 'axios';
import React, {Component} from 'react'; 
import AxiosCall from './MusicTable/musicTable';

class App extends Component {
    state = { }
    render() {
        return(
            <div>
            <h1>Our React App Using a Component</h1>
            <AxiosCall/>
            </div>
        );
    }
}

export default App;