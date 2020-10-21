import { render } from '@testing-library/react';
import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img alt={image.description} key={image.id} src={image.urls.regular} />
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