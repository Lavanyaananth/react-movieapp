import React from 'react';
import './MovieThumb.css';
import { tsPropertySignature } from '@babel/types';

const MovieThumb = (props) =>{
    return(
        <div className="rmdb-moviethumb">
          <img src={props.image} alt="moviethumb"></img> 
        </div>
    )
}

export default MovieThumb;