import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'fu-app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.scss']
})
export class MySelectComponent implements OnInit {
  @Input() options: Item[];
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  showBox = false;

  /**
   * Find @Input() value in @Input options and set appropriate label, if it exists
   */
  ngOnInit(): void {
    const selItem: Item = this.options.find(item => item.value === this.value);
    if (selItem && selItem.label) {
      this.value = selItem.label;
    }
  }

  /**
   * Show / hide drop-down box on click
   */
  dropDown(): void {
    this.showBox = !this.showBox;
  }

  /**
   * Handle selecting new item and emit this change
   * @param item - selected item
   */
  itemSelected(item: Item): void {
    this.value = item.label ? item.label : item.value;
    this.valueChange.emit(this.value);
    this.hide();
  }

  /**
   * Hide drop-down box
   */
  hide(): void {
    this.showBox = false;
  }
}
