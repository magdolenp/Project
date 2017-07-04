import { Component, OnDestroy } from '@angular/core';

import { Person } from '../models/person.model';
import { PersonService } from '../person.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fu-app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnDestroy {
  people: Person[];
  heroesSub: Subscription;

  constructor(private personService: PersonService) {
    this.heroesSub = this.personService.getPeople().subscribe(people => this.people = people);
  }

  ngOnDestroy(): void {
    this.heroesSub.unsubscribe();
  }

  get resultNumber(): number {
    return this.people.length;
  }
}
