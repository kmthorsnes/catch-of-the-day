import React from 'react';
import { format } from 'url';

class StorePicker extends React.Component {
    render() {
        return (
        <form className="store-selector">
            <h2>Please enter a store</h2>
            <input type="text" required placeholder="Store Name" />
            <button type="submit">Visit store -> </button>
        </form>

        ) 
        
    }
}

export default StorePicker; 