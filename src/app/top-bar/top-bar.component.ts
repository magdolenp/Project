import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'fu-app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  people: Person[];

  constructor(private personService: PersonService) {
  }

  getHeroes(): void {
    this.personService.getPeople().then(people => this.people = people);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getResultNumber(): number {
    return this.people.length;
  }
}
