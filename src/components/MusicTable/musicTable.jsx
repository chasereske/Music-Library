import React, {Component} from 'react'; 
import axios from 'axios';

    class MusicList extends Component {
        state = {
            music: [],
        };

        axiosCall(){
            axios.get('http://www.devcodecampmusiclibrary.com/').then(response=> {
                console.log(response);
                this.setState({music: response.data});
            });    
        }

        render(){
            return(
                <div> 
                    <ul>
                        {this.state.music.map(music => (
                            <li key={music.id}>{music.name}</li>
                        ))}
                    </ul>
                </div>
            );
        }
    }



export default MusicList;