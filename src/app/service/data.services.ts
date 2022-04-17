
export class DataServices {

   findMovieByTitle(title :any) 
   {
     // this is for fetch the data from the url and displyed in the component when we call it
     // and imported the DataServices to the home page and movie page 
     // the Api key was sent to my email 
     const url = `https://omdbapi.com/?s=${title}&apikey=3b0590c3`;
     return fetch(url)
        // bring me the data in a json form 
       .then(res=> res.json())
       // if there is any error it will catch and displayed in the console in the browser
       .catch(err => console.log("Error!", err))
   }
}
