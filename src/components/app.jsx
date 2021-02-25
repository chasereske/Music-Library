import axios from 'axios';
import React, {Component} from 'react'; 
import MusicList from './MusicTable/musicTable';
import Navbar from './Navbar/navbar';
import SearchBar from './SearchBar/searchBar';

class App extends Component {
    state = { }
    render() {
        return(
            <div className="container-fluid">
                <Navbar/>
                <SearchBar/>
                <div className="row row-spacer">
                    <MusicList/>
                </div>
            </div>
        );
    }
}

export default App;