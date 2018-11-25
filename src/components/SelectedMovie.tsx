import * as React from 'react';
import IMovie from '../model/IMovie';
import Spinner from './Spinner';
import {MyContext} from './Context';

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

//export default SelectedMovie;

function SelectedMovieWithHook(props){

    /*const {useState} = React;
    const [count,setCount] = useState(0)
    if(count==3){
        setCount(6)
    }
    
    return <>
            {count}
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(0)}>Reset</button>
           </>*/

/*{
  "vote_count": 953,
  "id": 338952,
  "video": false,
  "vote_average": 7.1,
  "title": "Fantastic Beasts: The Crimes of Grindelwald",
  "popularity": 336.83,
  "poster_path": "/uyJgTzAsp3Za2TaPiZt2yaKYRIR.jpg",
  "original_language": "en",
  "original_title": "Fantastic Beasts: The Crimes of Grindelwald",
  "genre_ids": [
    18,
    10751,
    14
  ],
  "backdrop_path": "/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg",
  "adult": false,
  "overview": "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
  "release_date": "2018-11-14"
}*/

    const {useState,useContext,useEffect} = React;

    const [moviesProps,setMoviesProps] = useState({})
    const context = useContext(MyContext)
    useEffect(()=>{
        if(moviesProps!=props.selectedM){
            //console.dir(moviesProps)
            setMoviesProps(context.selectedMovie)
            //console.dir(moviesProps)
        }
    })
    
    const displaySelected = function(){
        if(moviesProps.hasOwnProperty('id')==false){
            return <div>No movies were selected!</div>
        }else{
            return (<div style={props.myStyle}>
            <div>{moviesProps['title']}</div>
            <div><img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${moviesProps['poster_path']}`}/></div>

            </div>
            )
        }
    }
    return <>{displaySelected()}</>
    
}

export default SelectedMovieWithHook;


/*

{
  "myStyle": {
    "float": "right",
    "width": "45%"
  },
  "context": {
    "popularMovies": [
      
      {
        "vote_count": 5,
        "id": 404368,
        "video": false,
        "vote_average": 8.5,
        "title": "Ralph Breaks the Internet",
        "popularity": 74.159,
        "poster_path": "/6jBuc4l7ixM8S5PCcSYvGKDmIX9.jpg",
        "original_language": "en",
        "original_title": "Ralph Breaks the Internet",
        "genre_ids": [
          10751,
          16
        ],
        "backdrop_path": "/ivhK1NjnFji6lD5dkAThSzd3Mgq.jpg",
        "adult": false,
        "overview": "Taking place six years following the events of the first film, the story will center on Ralph's adventures in the Internet data space when a Wi-Fi router gets plugged into the arcade as he must find a replacement part to fix Sugar Rush.",
        "release_date": "2018-11-20"
      }
    ],
    "selectedMovie": {
      "vote_count": 2258,
      "id": 353081,
      "video": false,
      "vote_average": 7.2,
      "title": "Mission: Impossible - Fallout",
      "popularity": 194.274,
      "poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      "original_language": "en",
      "original_title": "Mission: Impossible - Fallout",
      "genre_ids": [
        28,
        53,
        12
      ],
      "backdrop_path": "/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg",
      "adult": false,
      "overview": "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
      "release_date": "2018-07-13"
    },
    "isLoading": true
  }
}
*/