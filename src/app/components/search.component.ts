import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  genre: string = 'anime';

  form: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      query: this.fb.control('', [ Validators.required ])
    });
  }

  onClickBack($event): void {
    this.router.navigate(['/list']);
  }

  onClickGo($event): void {
    this.router.navigate(['/result']);
  }

  setGenre(genre: string): void {
    this.genre = genre;
  }

}
