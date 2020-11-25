import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeDataBase } from '../anime.database';
import { Genre, SearchOption, SearchString } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  searchOptions: SearchOption[] = [];
  searchString: SearchString[] = [];

  constructor(private router: Router, private animeDB: AnimeDataBase) { }

  ngOnInit(): void {
    this.loadAnimeList();
  }

  onClickSearch($event): void {
    this.router.navigate(['/search']);
  }

  loadAnimeList(): void {
    this.animeDB.getSearchOption()
    .then(result => {
      this.searchOptions = result;
      this.searchOptions.forEach(element => {
        const newSearch = {
          id: element.id,
          q: element.q,
          genre: element.genre === Genre.Anime ? "anime" : "manga"
        };
        this.searchString.push(newSearch);
      });
    });
  }

}
