import React, {Component} from 'react'; 
import axios from 'axios';

    

class MusicList extends Component {
        state = {
            music: [],
        };

        componentDidMount(){
            axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(response=> {
                console.log(response);
                this.setState({music: response.data});
            });    
        }


        render(){
            return(
                <ul>
                    {this.state.music.map(music => <li>Title: {music.title}. Album: {music.album}. Artist: {music.artist}. Genre: {music.genre} </li>)}
                </ul>
                );
        }
    }



export default MusicList;