'use strict'

import * as React from 'react';
import IMovie, { IResponse } from '../model/IMovie';
import {getMovies} from '../api/api';
import SelectedMovie from './SelectedMovie';


interface IState  {
    popularMovies : IMovie[],
    selectedMovie ?: IMovie,
    isLoading ?: boolean
}


class App extends React.Component<{},IState>{
    constructor(props){
        super(props)
        this.state = {
            popularMovies : [],
            selectedMovie : null,
            isLoading:false
        }
        this.selectMovie = this.selectMovie.bind(this)
        this.changeLoadingState = this.changeLoadingState.bind(this)
        this.addErrorObjectToState = this.addErrorObjectToState.bind(this)
    }
    componentDidMount(){
        getMovies().then(response=>{this.setState({popularMovies : response.results,selectedMovie:response.results[0]})})
        
    }

    selectMovie(movieId : number){
        let selectedMov = this.state.popularMovies.find(mov=>mov.id==movieId)
        this.setState({
            ...this.state,selectedMovie:selectedMov,isLoading:true
        })
    }

    displayMovies(){
        const {popularMovies} = this.state;
        const myUl = {
            float:"left",
            width : "50%"
        } as React.CSSProperties
        const selectedMovieStyle = {
            float:"right",
            width : "45%"
        }
        const myLi = {
            cursor:"pointer",
            paddingBottom:"10px"
        } as React.CSSProperties
        if(popularMovies.length>0){
            let movies = popularMovies.map((mov:IMovie)=>(<li 
                style={myLi} key={mov.id} onClick={()=>{this.selectMovie(mov.id)}}>{mov.title}</li>))
            return (
            <>
                <ul style={myUl}>{movies}</ul>
                <SelectedMovie changeLoading={this.changeLoadingState} 
                myStyle={selectedMovieStyle} activeMovie={this.state.selectedMovie} 
                isLoading={this.state.isLoading} />
                <button onClick={()=>this.addErrorObjectToState()}>Add Error to State</button>
            </>)

        }else{
            
            return <div>Loading.....</div>
        }
    }
    addErrorObjectToState(){
        const oldState = this.state.popularMovies;
        this.setState({
            popularMovies:undefined
        })
    }
    changeLoadingState(newLoadingValue){
        this.setState({
            ...this.state,isLoading:newLoadingValue
        })
    }
    render(){
        console.log('state of app',this.state)
        return <React.Fragment>{this.displayMovies()}</React.Fragment>
    }

}

export default App;


