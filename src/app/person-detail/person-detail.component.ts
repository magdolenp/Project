import { Component, OnDestroy } from '@angular/core';

import { Person } from '../models/person.model';
import { PersonService } from '../person.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fu-app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnDestroy {
  people: Person[];
  heroesSub: Subscription;

  constructor(private personService: PersonService) {
    this.heroesSub = this.personService.getPeople().subscribe(people => this.people = people);
  }

  ngOnDestroy(): void {
    this.heroesSub.unsubscribe();
  }

  getImage(image: string): string {
    return `url(${image})`;
  }
}
