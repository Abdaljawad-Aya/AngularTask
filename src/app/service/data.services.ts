
export class DataServices {
  
   findMovieByTitle(title :any) 
   {
     const url = `https://omdbapi.com/?s=${title}&apikey=3b0590c3`;
     return fetch(url)
       .then(res=> res.json())
       .catch(err => console.log("Error!", err))
   }
}
