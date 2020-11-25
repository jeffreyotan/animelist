import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JikanService } from '../jikan.service';
import { Genre, JikanResult, SearchOption } from '../models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  genre: string = '';
  q: string = '';

  jikenResult: JikanResult[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private jikan: JikanService) { }

  ngOnInit(): void {
    this.genre = this.activatedRoute.snapshot.params.genre;
    this.q = this.activatedRoute.snapshot.params.q;

    this.jikan.getInformation(this.q, this.genre)
      .then(retVal => {
        retVal.results.forEach(element => {
          const oneResult = {
            airing: element.airing,
            end_date: element.end_date,
            episodes: element.episodes,
            image_url: element.image_url,
            mal_id: element.mal_id,
            members: element.members,
            rated: element.rated,
            score: element.score,
            start_date: element.start_date,
            synopsis: element.synopsis,
            title: element.title,
            type: element.type,
            url: element.url
          } as JikanResult;
          this.jikenResult.push(oneResult);
        });
      });
  }

}
