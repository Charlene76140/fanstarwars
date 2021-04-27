import React from "react";
import Resources from './resources/Resources';

class Availableresource extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            items : ["films","people","planets","species","starships","vehicles"]
        }
    }

    render () {
        return (
            <div className="container">
                <Resources items={this.state.items} />
            </div>
        );
    }
}

export default Availableresource;