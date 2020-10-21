import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const images = props.images.map( image => {
        return <ImageCard key={image.id} image={image}/>
    });

    return <div>{images}</div> 
};

export default ImageList;

//Uso de map para devolver informacion de un array
/*render(){
    const renderdUsers = users.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
    });

    return (
        <ul>
            {renderdUsers}
        </ul>
    );
}*/