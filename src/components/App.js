import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        //console.log(term);
        axios.get('https://api.unplash.com/search/photos', {
            params: { query: tem },
            headers: {
                Authorization: 'Client-ID ufhuehsfhesiufhseiufh'                
            }            
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );       
    }
};

export default App;