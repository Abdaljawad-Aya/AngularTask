import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  
  // to push data to array
  bookmarks = [];

  getBookmarks() 
  {
    // this will grap the bookmarked Item from the local storage
    // and if it is not null, tell the browser that this item is bookmarked
    const data = JSON.parse(localStorage.getItem('bookmarks')!);
    if(data !== null)
    {
      this.bookmarks = data;
      console.log("Bookmarked!");
    }
  }
   
  removeBookmarks(title:any) 
  {
    for (let i = 0; i < this.bookmarks.length; i++) 
    {
      if (this.bookmarks[i] === title) 
      {
        // splice removes the element from the bookmark array 
        this.bookmarks.splice(i,1); 
        localStorage.setItem('bookmark', JSON.stringify(this.bookmarks));
        return;
      } 
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.getBookmarks();
  }

}

