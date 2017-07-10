import { Component, OnDestroy } from '@angular/core';

import { Person } from '../models/person.model';
import { PersonService } from '../person.service';
import { Tag } from '../models/tag.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fu-app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnDestroy {
  people: Person[];
  heroesSub: Subscription;
  sliderValue: number;
  submitted = false;
  addedTags: Tag[];
  inputValue: string;

  constructor(private personService: PersonService) {
    this.addedTags = [];
    this.heroesSub = this.personService.getPeople().subscribe(people => this.people = people);
    this.sliderValue = 21;
    this.inputValue = '';
  }

  ngOnDestroy(): void {
    this.heroesSub.unsubscribe();
  }

  onSubmit(): void {
    this.submitted = true;
  }

  addTag(): void {
    if (this.inputValue !== '') {
      this.addedTags.push({value: this.inputValue, hover: false});
      this.inputValue = '';
    }
  }

  deleteTag(index: number): void {
    this.addedTags.splice(index, 1);
  }
}
