import { Component, Input } from '@angular/core';

import { Person } from '../models/person.model';

@Component({
  selector: 'fu-app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent {
  @Input() person: Person;

  getImage(image: string): string {
    return `url(${image})`;
  }
}
