/**
 * Created by Mefisto on 28-Jun-17.
 */
import { Injectable } from '@angular/core';

import { Person } from './models/person.model';
import { PEOPLE } from './mock-person';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PersonService {
  private  people$ = new Subject<Person[]>();
  private people = PEOPLE;

  constructor() {
    setInterval(
      () => {
        // this.people = this.people.slice(1);
        this.people$.next(this.people);
      },
      1000
    );
  }

  getPeople(): Observable<Person[]> {
    return this.people$.asObservable();
  }
}
