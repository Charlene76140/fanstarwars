import React from "react";
import Axios from "axios";
import Resource from './resources/Resource';

class Availableresource extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            loaded: false,
            error: false,
            data : null,
            resources: null,
        }
    }

    componentDidMount() {
        Axios.get("https://swapi.dev/api/")
        .then((response) => {
            //I get the response from the server and I make a table
            let array = Object.keys(response.data)
            let resources = array.map((resource)=>{
                return <Resource resource={resource}/>
            });

            this.setState({
                loaded: true,
                data: response.data,
                resources: resources
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
            return (
                <section className="">
                    <h2 className="py-3 text-dark">Trouvez une information par types de ressources :</h2>
                    <div className="row">
                        {this.state.resources}
                    </div>
                </section>
            );
        }
        return(
            <p>Vos données sont en cours de chargement</p>
        );
    }
}

export default Availableresource;