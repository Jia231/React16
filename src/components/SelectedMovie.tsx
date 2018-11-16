import * as React from 'react';
import IMovie from '../model/IMovie';
import Spinner from './Spinner'

interface IProps{
    activeMovie ?: IMovie
    isLoading : boolean,
    myStyle : {
        float : String,
        width : String
    },
    changeLoading : (newLoadingValue:boolean)=>void
}

interface IState {
    activeMovie ?: IMovie
    isLoading : boolean
}

class SelectedMovie extends React.Component<IProps,IState>{
    constructor(props){
        super(props)
        this.state = {
            isLoading : false
        }
    }

    static getDerivedStateFromProps(nextProps){
        //console.log(nextProps)
        if(nextProps.isLoading==true){
            return{
                isLoading : nextProps.isLoading,
                activeMovie : nextProps.activeMovie
            }
        }
        if(nextProps.activeMovie!=null){
            return {
                isLoading : nextProps.isLoading,
                activeMovie : nextProps.activeMovie
            }
        }
        return null;
    }

    displaySelected(){
        //console.log('state in selected movie',this.state)
        const myStyle = this.props.myStyle as React.CSSProperties
        if(this.state.activeMovie!=null && this.state.isLoading == false){
        return(
        <div style={myStyle}>
            <div>{this.state.activeMovie.title}</div>
            <div><img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${this.state.activeMovie.poster_path}`}/></div>
        </div>)
        }
        else if(this.state.activeMovie!=null && this.state.isLoading==true){
            setTimeout(function(){
                this.props.changeLoading(false)
            }.bind(this),1000)
            return <Spinner/>
        }
        else{
            return <div>No movie has been selected</div>
        }
    }

    render(){
        return  <div>{this.displaySelected()}</div>

    }

}

export default SelectedMovie;

/**/