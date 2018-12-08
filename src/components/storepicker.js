import React from 'react';
import { format } from 'url';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();
   
    goToStore = (event) =>  {
        // Stop from submiting
        event.preventDefault();
        // Get text from that input
        console.log(this);
        // Change the page to store/whatever they entererd

    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input 
                    type="text"
                    ref={this.myInput} 
                    required placeholder="Store Name" 
                    defaultValue={getFunName()} />
                <button type="submit">Visit store -> </button>
            </form>

        )

    }
}



export default StorePicker; 