import * as React from 'react';
import IMovie from '../model/IMovie';

export interface IContext  {
    popularMovies : IMovie[],
    selectedMovie ?: IMovie,
    isLoading ?: boolean,
}

export const defaultValue = {
            popularMovies : [],
            selectedMovie : null,
            isLoading:false,
}



export const MyContext = React.createContext<IContext>(defaultValue)
export const MyContextProvider = MyContext.Provider;
export const MyContextConsumer = MyContext.Consumer;

