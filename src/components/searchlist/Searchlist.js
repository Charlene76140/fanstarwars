import React from "react";
import Makesearch from "./search/Makesearch";
import Showinformations from "./showinformations/Showinformations";

class Searchlist extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            items: []
        }
    }
    
    searchItem = (item) => {
        let arrayTemp = this.state.items;
        arrayTemp.push(item);

        this.setState({
            items: arrayTemp
        })
    }

    render () {
        return(
            <div>
                <Makesearch arrayTemp={this.searchItem}/>
                <Showinformations items={this.state.items}/>    
            </div>
        );
    }
}    

export default Searchlist;