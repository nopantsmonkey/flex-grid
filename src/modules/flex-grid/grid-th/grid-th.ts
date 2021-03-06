import {Component, Input} from '@angular/core';
import {GridOrder} from '../helper';

@Component({
  selector: 'grid-th',
  templateUrl: './grid-th.html',
  styleUrls: ['./grid-th.css']
})

export class GridThComponent {
  title = 'grid-head-data';
  @Input() icon = '';
  @Input() name = '';
  @Input() sort = GridOrder.ASC;

  order: any = GridOrder;
  disabledSort = true;

  clickHandler(e): void {
  }

  invertOrder(order: GridOrder) {
    return order === GridOrder.ASC ? GridOrder.DESC : GridOrder.ASC;
  }

  private onClick(e): void {
    if (!this.disabledSort) {
      this.sort = this.invertOrder(this.sort);
      this.clickHandler(e);
    }
  }
}
