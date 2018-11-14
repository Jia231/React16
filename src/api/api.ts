

import ApiCalls from '../../config';
import {IResponse} from '../model/IMovie';
import ApiError from './ApiError';

export async function getMovies () : Promise<IResponse>{
    const requestUrl = `${ApiCalls.BASE_URL}${ApiCalls.API_KEY}&&${ApiCalls.SORT_BY_DESC}`;

    const response = await fetch(requestUrl);

    if(response.ok){
        return await response.json()
    }else{
        throw new ApiError(response.status,response.statusText)
    }

}