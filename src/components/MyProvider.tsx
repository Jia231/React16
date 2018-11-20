import * as React from 'react';
import {MyContextProvider , IContext, defaultValue } from './Context';
import {getMovies} from '../api/api';

class MyProvider extends React.Component<{},IContext>{

    constructor(props){
        super(props)
        let newState = Object.assign({},{...defaultValue,
            addPopularMoviesToState:this.addPopularMoviesToState, 
            selectMovie : this.selectMovie,
            changeLoading :this.changeLoading
        })
        this.state = newState;

    }

    changeLoading = (newLoadingValue)=>{
        this.setState({isLoading:newLoadingValue})
    }

    selectMovie = (movieId) =>{
        console.log('this is the movie selected',movieId)
        let selectedMov = this.state.popularMovies.find(mov=>mov.id==movieId)
        this.setState({selectedMovie:selectedMov,isLoading:true})
    }

    addPopularMoviesToState = () => {
        //console.log('in the get movies')
        getMovies().then(
            response=>{{
                let newState = Object.assign({},{...defaultValue,
                    popularMovies:response.results,selectedMovie:response.results[0]})
                //console.log('this is the new movie state in get movies',newState)
                //console.log(this.state)
                this.setState({popularMovies:response.results,
                    selectedMovie:response.results[0]
                })
        }})
    }

    render(){
        return <MyContextProvider value={this.state}>
            {this.props.children}
        </MyContextProvider>
    }
}


export default MyProvider;