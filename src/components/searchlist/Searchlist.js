import React from "react";
import Axios from "axios";
import Makesearch from "./search/Makesearch";
import Showinformations from "./showinformations/Showinformations";

class Searchlist extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            loaded: false,
            error: false,
            data: null,
            peoples: null,
        }
    }

    componentDidMount (){
        Axios.get("https://swapi.dev/api/people/")
        .then((response) => {
            console.log(response)
            let peoples = response.data.results.map((people)=>{
                return <Showinformations people={people} />
            });

            this.setState({
                loaded: true,
                data: response.data,
                peoples: peoples
            })
        })

        .catch((error) => {
            this.setState({
                loaded: true,
                error: error
            })
        })
    }
    
    render () {
        if(this.state.loaded) {
            if(this.state.error){
                return (
                    <p>Une erreur est survenue : {this.state.error.message}</p>
                );
            }
            return(
                <div>
                    <Makesearch />
                    <h2 className="text-dark">résulat de la recherche : </h2>
                    {this.state.peoples}
                </div>
            );
        }
        return(
            <p>Vos données sont en cours de chargement</p>
        );
    }
}    

export default Searchlist;