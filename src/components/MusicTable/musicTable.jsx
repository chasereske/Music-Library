import React, {Component} from 'react'; 
import axios from 'axios';

    

class MusicList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                music: [],
            }
        }

        componentDidMount(){
            axios.get('http://www.devcodecampmusiclibrary.com/api/music').then(response=> {
                console.log(response);
                this.setState({music: response.data});
            });    
        }

        renderTableData() {
            return this.state.music.map((song) => {
                const {id, title, album, artist, genre} = song
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{album}</td>
                        <td>{artist}</td>
                        <td>{genre}</td>
                    </tr>
                )
            })
        }

        renderTableHeader() {
            let header = <tr><td>ID</td><td>Title</td><td>Album</td><td>Artist</td><td>Genre</td></tr>
            return header;
            }
        


        render(){
            return(
              
                /*<ul>
                    {this.state.music.map(music => <li>Title: {music.title}. Album: {music.album}. Artist: {music.artist}. Genre: {music.genre} </li>)}
                </ul>*/

                /* <div>
                    <table>

                        {this.state.music.map(song => <TableRow  song = {song} />)}//<tr><td>props.song.title</td><td>{this.props.song.artist}</td></tr>
                    </table>
                </div> */

                <div>
                    <h1>Music Library Table</h1>
                    <table>
                        <tbody>
                            {this.renderTableHeader()}
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
        
                );
        }
    }



export default MusicList;