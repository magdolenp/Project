import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'fu-app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.scss']
})
export class ShortlistComponent implements OnInit {
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

  getTotal(): number {
    let value = 0;
    if (this.people) {
      for (const person of this.people) {
        value += person.costPerPost;
      }
    }
    return value;
  }
}
