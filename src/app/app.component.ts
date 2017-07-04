import { Component, OnInit } from '@angular/core';

import { Person } from './person.model';
import { PersonService } from './person.service';

@Component({
  selector: 'fu-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dashboard';
  people: Person[];

  constructor(private personService: PersonService) { }

  getHeroes(): void {
    this.personService.getPeople().then(people => this.people = people);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
