/**
 * Created by Mefisto on 28-Jun-17.
 */
import { Injectable } from '@angular/core';

import { Person } from './person.model';
import { PEOPLE } from './mock-person';

@Injectable()
export class PersonService {
  getPeople(): Promise<Person[]> {
    return Promise.resolve(PEOPLE);
  }
}
