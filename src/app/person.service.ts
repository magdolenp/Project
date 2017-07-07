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
  private people = PEOPLE;
  private people$ = new Observable(subscriber => {
    subscriber.next(this.people);
  });

  getPeople(): Observable<Person[]> {
    return this.people$;
  }
}
