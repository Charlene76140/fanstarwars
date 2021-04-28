import React from "react";
import Makesearch from "./search/Makesearch";
import Showinformations from "./showinformations/Showinformations";

class Searchlist extends React.Component {
    constructor (props) {
        super (props);
    }
    
    render () {
        return(
            <div>
                <Makesearch />
                <Showinformations />    
            </div>
        );
    }
}    

export default Searchlist;