import React, {Component} from 'react'; 
import './musicTable.css'; 

    

const MusicList= ({music})=> {
    return(
        music.map((song,i) =>
        <table id='song'>
            <tr>
                <td>{music[i].id}</td>
                <td>{music[i].title}</td>
                <td>{music[i].album}</td>
                <td>{music[i].artist}</td>
                <td>{music[i].genre}</td>
            </tr>
        </table>
        ));
    
        
    }



export default MusicList;