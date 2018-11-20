'use strict'

import * as React from 'react';
import IMovie, { IResponse } from '../model/IMovie';
import {getMovies} from '../api/api';
import SelectedMovie from './SelectedMovie';
import {MyContextConsumer,defaultValue,MyContext} from './Context';


interface IState  {
    popularMovies : IMovie[],
    selectedMovie ?: IMovie,
    isLoading ?: boolean
}

class App extends React.Component<{},IState>{
    constructor(props){
        super(props)
        this.state = defaultValue
        this.selectMovie = this.selectMovie.bind(this)
        this.changeLoadingState = this.changeLoadingState.bind(this)
        this.addErrorObjectToState = this.addErrorObjectToState.bind(this)
    }
    componentDidMount(){
        this.context.addPopularMoviesToState()
        //console.log('this is in the component did mount',this.context.popularMovies)
        //console.log(this.context.popularMovies)
        
        /*getMovies().then(response=>{this.setState({popularMovies : 
            response.results,selectedMovie:response.results[0]})})*/
            
        
    }

    selectMovie(movieId : number){
        this.context.selectMovie(movieId)
    }

    displayMovies(){
        const {popularMovies} = this.context;
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
                myStyle={selectedMovieStyle} activeMovie={this.context.selectedMovie} 
                isLoading={this.context.isLoading} />
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
        this.context.changeLoading(newLoadingValue)
    }
    render(){

        return (<React.Fragment>
                    <MyContextConsumer>
                        {
                            context=>{
                                return <>{this.displayMovies()}</>
                            }
                        }
                    </MyContextConsumer>
                </React.Fragment>)
    }

}
App.contextType = MyContext
export default App;





/*<ul style={myUl}>{movies}</ul>
                <SelectedMovie changeLoading={this.changeLoadingState} 
                myStyle={selectedMovieStyle} activeMovie={this.state.selectedMovie} 
                isLoading={this.state.isLoading} />
                <button onClick={()=>this.addErrorObjectToState()}>Add Error to State</button>*/