'use strict'

import * as React from 'react';
import IMovie, { IResponse } from '../model/IMovie';
import {getMovies} from '../api/api';

interface IState  {
    popularMovies : IMovie[],
    selectedMovie ?: IMovie
}


class App extends React.Component<{},IState>{
    constructor(props){
        super(props)
        this.state = {
            popularMovies : [],
        }
        this.selectMovie = this.selectMovie.bind(this)
    }
    componentDidMount(){
        getMovies().then(response=>{this.setState({popularMovies : response.results,selectedMovie:response.results[0]})})
        
    }

    selectMovie(movieId : number){
        let selectedMov = this.state.popularMovies.find(mov=>mov.id==movieId)
        this.setState({
            ...this.state,selectedMovie:selectedMov
        })
    }

    displayMovies(){
        const {popularMovies} = this.state;
        if(popularMovies.length>0){
            let movies = popularMovies.map((mov:IMovie)=>(<li key={mov.id} onClick={()=>{this.selectMovie(mov.id)}}>{mov.title}</li>))
            return (
            <div>
                
                <ul>{movies}</ul>
                <div>
                    <div>{this.state.selectedMovie.title}</div>
                    <div><img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.state.selectedMovie.poster_path}`}/></div>
                </div>
            </div>)

        }else{
            
            return <div>Loading.....</div>
        }
    }
    render(){

        return <div>{this.displayMovies()}</div>
    }

}

export default App;