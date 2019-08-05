import {
  Input,
  OnInit,
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleCardComponent implements OnInit {

  @Input() Index: any = 0;
  @Input() Item: any = null;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() { }

  urlLink () {
      const _url = `${this.Item.BasicInfo.Condition}-
          ${this.Item.BasicInfo.Year}-
          ${this.Item.BasicInfo.Make}-
          ${this.Item.BasicInfo.Model}-
          ${this.Item.DealerInfo.DealerCity}-
          ${this.Item.DealerInfo.DealerState}-
          ${this.Item.InventoryId}
      `;
      return _url.replace(/\s+/g, '');
  }

}
