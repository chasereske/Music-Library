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
            searchBox: '',
            filteredMusic: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/songs').then(response=> {
        console.log(response);
        this.setState({music: response.data});
    });    
}
    onSearchBoxChange = (event) =>{
        this.setState({searchBox: event.target.value.toLowerCase()});
        console.log(this.state.searchBox);
    }




    render() {
       const filteredMusic = this.state.music.filter(song => {
           return song.title.toLowerCase().includes(this.state.searchBox) || song.artist.toLowerCase().includes(this.state.searchBox) || song.album.toLowerCase().includes(this.state.searchBox) || song.genre.toLowerCase().includes(this.state.searchBox)
       })
       console.log(filteredMusic);
        return(
            <div className="container-fluid">
                <Navbar/>
                <SearchBox searchBoxChange={this.onSearchBoxChange}/>
                <div className="row row-spacer">
                    <MusicList music = {filteredMusic} />
                </div>
            </div>
        );
    }
}

export default App;