import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JikanService {
    
    constructor(private http: HttpClient) {}

    // eg. https://api.jikan.moe/v3/search/anime?q=naruto
    host: string = "https://api.jikan.moe/v3";

    async getInformation(q: string, type: string): Promise<any> {
        const retVal = await this.http.get<any>(this.host + '/search/' + type + '?q=' + q).toPromise();
        console.info('=> retVal: ', retVal);
        return retVal;
    }

}