import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'fu-app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  people: Person[];

  constructor(private personService: PersonService) {
  }

  getHeroes(): void {
    this.personService.getPeople().then(people => this.people = people);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getImage(image: string): string {
    return `url(${image})`;
  }
}
