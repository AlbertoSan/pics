import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    /*onInputChange(event) {
        console.log(event.target.value);
    }*/

    onInputClick() {
        console.log('Input was clicked');
    }

    state = { term: '' };

    onFormSubmit(event) {
        event.preventDefault();

        //console.log(this.state.term);
        this.props.onSubmit(this.state.term)
    }

    //el handler tambien puede usarse como arrow function
    //en el input se podria llamar de la siguiente forma: onChange={(e) => console.log(e.target.value)}
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Buscador de Imagenes</label>                        
                        <input
                            type="text"
                            value={this.state.term}
                            onClick={this.onInputClick}
                            onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })} />
                    </div>                    
                </form>
            </div>
        );
    }
}

export default SearchBar;