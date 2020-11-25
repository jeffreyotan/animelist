import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { Genre, SearchOption } from './models';

export const normalizeSearchText = (q: string) => q.trim().toLowerCase();

@Injectable()
export class AnimeDataBase extends Dexie {

    private searchOption: Dexie.Table<SearchOption, number>;

    constructor() {
        super('animeDB');
        // create schema
        this.version(2).stores({
            searchOption: '++id,q'
        });
        this.searchOption = this.table('searchOption');
    }

    async saveSearchOption(s: SearchOption): Promise<any> {
        const gen = s.genre == Genre.Anime ? 0 : 1;
        s.q = normalizeSearchText(s.q);

        // select count(*) from searchOption where q like 'abc' and genre = 'anime'
        const result = await this.searchOption.where('q').equals(s.q).and(doc => doc.genre == gen).count();
        if(result <= 0) {
            return await this.searchOption.add(s);
        }
    }

    async getSearchOption(): Promise<SearchOption[]> {
        return await this.searchOption.orderBy('q').toArray();
    }
}