import axios from 'axios';
import React, {Component} from 'react'; 
import AxiosCall from './MusicTable/musicTable';
import Navbar from './Navbar/navbar';

class App extends Component {
    state = { }
    render() {
        return(
            <div className="container-fluid">
                <Navbar/>
                <div className="row row-spacer">
                    <h1>Our React App Using a Component</h1>
                    <AxiosCall/>
                </div>
            </div>
        );
    }
}

export default App;