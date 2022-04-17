import { Component, OnInit, Input } from '@angular/core';
// import { BookmarkComponent } from '../bookmark/bookmark.component';
import { DataServices } from "../service/data.services";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies  = [];
  bookmarks = [];
  // currentBookmark = BookmarkComponent;
  constructor(private dataService : DataServices) { }
  
  getMovieDetails(movie : any) 
  {
    // this will grap the bookmarked movies from the book marked page throught the localStorage
    const getBookmarks = JSON.parse(localStorage.getItem('bookmarks')!);
    // checks if getBookmarks is not null to parse it in JSON else it will consider it a new bookmark
    // this.currentBookmark = getBookmarks !== null ? JSON.parse(getBookmarks) : new getBookmarks;
  
    // checking wether the movie is active or not 
    movie.active = !movie.active;
    let foundAtPos = -1;

    if(getBookmarks == null) 
    {
      // if its null push it to the array
      this.bookmarks = [];
    } else {
      this.bookmarks = getBookmarks;
    }

    if(movie !== null )
    {
      console.log(this.bookmarks.length);

      for (let i = 0; i < this.bookmarks.length; i++) 
      {
          if(this.bookmarks[i] == movie.imdbID)
          {
              foundAtPos = 1;
          }
      }
      if(foundAtPos > -1) 
      {
        console.log('No updates');
      } else {
        // this.bookmarks.push(movie);
        localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      }
    }
  }

  @Input() moviedata : any;

  ngOnInit(): void {
    this.getMovieDetails(null);
  }

}
