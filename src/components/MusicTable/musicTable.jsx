import React, {Component} from 'react'; 
import axios from 'axios';


    function AxiosCall(){
        return(
        axios.get('http://www.devcodecampmusiclibrary.com/').then((data) => {
        console.log(data);
    }));
}



export default AxiosCall;