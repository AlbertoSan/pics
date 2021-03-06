import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    //Error manejando el this. para solucionarlo modifcaremos la funcion como una arrow function
    /*async onSearchSubmit(term) {        
        const response = await axios.get('https://api.unplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID ufhuehsfhesiufhseiufh'
            }
        });
        
        console.log(response.data.results);
        this.setState({ images: response.date.results });
    }*/

    onSearchSubmit = async (term) => {        
        const response = await unsplash.get('/search/photos', {
            params: { query: term },            
        });
        
        console.log(response.data.results);
        //this.setState({ images: response.date.results });
    }


    //Usando la respuesta de axios como una promesa con .then()
    /*onSearchSubmit(term) {
        //console.log(term);
        axios.get('https://api.unplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID ZIF4EQjFDpkNimOlUPQ9MUzNhqyFuX_L7sUbr5bn16o'
            }
        }).then((response) => {
            console.log(response.data.results);
        });
    }*/
    
    render() {        
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );      
        
         
    }
};

export default App;