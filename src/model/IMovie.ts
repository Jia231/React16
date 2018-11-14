/*{"vote_count":2159,"id":335983,"video":false,"vote_average":6.6,"title":"Venom",
"popularity":225.576,"poster_path":"\/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg","original_language":"en",
"original_title":"Venom","genre_ids":[878],"backdrop_path":"\/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
"adult":false,"overview":"When Eddie Brock acquires the powers of a symbiote, he will 
have to release his alter-ego \"Venom\" to save his life.","release_date":"2018-10-03"}*/
/*image:https://image.tmdb.org/t/p/w600_and_h900_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg*/

interface IMovie {
    id : number,
    title : String,
    poster_path : String
}

export interface IResponse {
    readonly results : IMovie[]
}

export default IMovie;