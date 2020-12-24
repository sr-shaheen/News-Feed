import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { openDB, DBSchema, IDBPDatabase } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class IndexDBService {
  private db: IDBPDatabase<MyDB>;

  constructor() {
    this.connectToDb();
  }

  async connectToDb() {
    this.db = await openDB<MyDB>('my-db', 1, {
      upgrade(db) {
        db.createObjectStore('data-store');
      },
    });
  }

  addData(value: any, key: string) {
    return this.db.put('data-store', value, key);
  }

  clearDatabase() {
    return this.db.clear('data-store');
  }

  async getData(key: string) {
    this.db = await openDB<MyDB>('my-db', 1, {
      upgrade(db) {
        db.createObjectStore('data-store');
      },
    });
    return this.db.get('data-store', key);
  }
}

interface MyDB extends DBSchema {
  'data-store': {
    key: string;
    value: any;
  };
}
