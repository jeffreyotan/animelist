import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AnimeDataBase, normalizeSearchText } from "../anime.database";
import { Genre, SearchOption } from '../models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  genre: string = 'anime';

  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private animeDB: AnimeDataBase) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      q: this.fb.control('', [ Validators.required ])
    });
  }

  onClickBack($event): void {
    this.router.navigate(['/list']);
  }

  async onClickSave($event) { // when the save options button is clicked
    const opt: SearchOption = {
      q: this.form.get('q').value,
      genre: this.genre == "Anime" ? Genre.Anime : Genre.Manga
    };

    await this.animeDB.saveSearchOption(opt);

    this.onClickGo('');
  }

  onClickGo($event): void { // when the go to Results page is clicked
    const q = normalizeSearchText(this.form.get('q').value);
    this.router.navigate(['/result', this.genre, q]);
  }

  setGenre(genre: string): void {
    this.genre = genre.trim().toLowerCase();
  }

}
