import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  options: AnimationOptions = {
    path: './assets/santa.json'
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickAnime($event): void {
    this.router.navigate(['/list']);
  }

}
