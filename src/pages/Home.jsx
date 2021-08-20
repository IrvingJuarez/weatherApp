import React from "react"
import Loader from "../components/Loader"
import Map from "../components/Map"
import BasicInfo from "../components/BasicInfo"
import Weather from "./Weather"

import "./styles/Home.css"

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    renderContent(){
        const { coord, weather } = this.props.state.data

        if(screen.width >= 750){
            return(
                <React.Fragment>
                    <article className="home-main__info">
                        <Weather />
                    </article>

                    <article className="home-main__map">
                        <div className="home-main__map--basic-info-container">
                            <BasicInfo status={weather[0].main}/>
                        </div>
                        <Map lat={coord.lat} lon={coord.lon}/>
                    </article>
                </React.Fragment>
            )
        }else{
            return(
                <Map lat={coord.lat} lon={coord.lon}/>
            )
        }
    }
    
    render(){
        const { loading, error } = this.props.state

        if(loading){
            return(
                <Loader />
            )
        }else if(error){
            return(
                <div className="error-msg">
                    <h3>Error: {error.message}</h3>
                </div>
            )
        }else{
            return(
                <section className="home-main">
                    {this.renderContent()}
                </section>
            )
        }
    }
}

export default Home