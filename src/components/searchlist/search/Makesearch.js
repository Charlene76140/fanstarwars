import React from "react";

class Makesearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
        console.log(this.state.value);
    }
    
    // Pour l'instant on renvoie simplement un input et un boutton qui sont non fonctionnels
    render() {
        return(
            <div className="my-5">
                <h2>Saisissez l'ID du personnage recherché</h2>
                <input onChange={this.handleChange} value={this.state.value} type="text" className="form-control d-inline w-50 me-3" />
            </div>
        );
    }
}

export default Makesearch;