import { Component, OnInit } from '@angular/core';
import { DataServices } from "../service/data.services";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchTitle : any;
  movieList = [];

  constructor(private dataService: DataServices) { }

  searchMovie(title : any) {
    this.dataService
      .findMovieByTitle(title)
      .then((result) => this.movieList = result.Search)
  }
  ngOnInit(): void {}

}
