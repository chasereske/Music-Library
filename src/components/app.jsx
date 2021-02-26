import axios from 'axios';
import React, {Component} from 'react'; 
import MusicList from './MusicTable/musicTable';
import Navbar from './Navbar/navbar';
import SearchBox from './SearchBar/searchBar';

class App extends Component {
    constructor(){
        super()
        this.state={
            music: [],
            searchBox: ''
        }
    }

    onSearchBoxChange = (event) =>{
        this.setState({searchBox: event.target.value});
        console.log(this.state.searchBox);
    }
    filteredMusic(){
        
    }
    render() {

        return(
            <div className="container-fluid">
                <Navbar/>
                <SearchBox searchBoxChange={this.onSearchBoxChange}/>
                <div className="row row-spacer">
                    <MusicList />
                </div>
            </div>
        );
    }
}

export default App;