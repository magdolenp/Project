import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { Tag } from './tag.model';

@Component({
  selector: 'fu-app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  people: Person[];
  sliderValue = 21;
  submitted = false;
  addedTags: Tag[];
  inputValue: string;

  constructor(private personService: PersonService) {
    this.addedTags = [];
  }

  getHeroes(): void {
    this.personService.getPeople().then(people => this.people = people);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSubmit(): void {
    this.submitted = true;
  }

  addTag(): void {
    this.addedTags.push(new Tag(this.inputValue, false));
    this.inputValue = '';
  }

  deleteTag(index: number): void {
      this.addedTags.splice(index, 1);
  }
}
