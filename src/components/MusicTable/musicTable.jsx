import React, {Component} from 'react'; 
import axios from 'axios';
import './musicTable.css'; 

    

class MusicList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                music: [],
            }
        }

        componentDidMount(){
                axios.get('http://localhost:3000/api/songs').then(response=> {
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
            
                <div>
                    <h1 id='title'>Music Library Table</h1>
                    <table id='song'>
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