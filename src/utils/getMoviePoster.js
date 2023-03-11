import placeholder from "../placeholder-image.png"

export function getMoviePoster(path,width){
    return path
        ? `https://image.tmdb.org/t/p/w${width}${path}` 
        : placeholder;

}