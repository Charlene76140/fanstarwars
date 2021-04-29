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
            console.log(response)
            let test = response.data;
            console.log(test)
            let test2 = Object.keys(test)
            let resources= test2.map((resource)=>{
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
            console.log(error);
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
                <section>
                    <h2>Trouvez une information par type de ressource :</h2>
                    <div className="container">
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