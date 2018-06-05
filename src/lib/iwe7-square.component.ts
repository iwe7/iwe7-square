import { Iwe7IcssService } from 'iwe7-icss';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ElementRef,
  Injector
} from "@angular/core";
import { BaseWithIcss } from "iwe7-base";

@Component({
  selector: "iwe7-square",
  template: `
  <div class="iwe7-square-container">
    <ng-content></ng-content>
  </div>
  `,
  styleUrls: ["./iwe7-square.component.scss"]
})
export class Iwe7SquareComponent extends BaseWithIcss {
  @Input() width: string;
  @Input() backgroundColor: string;
  constructor(injector: Injector, public icss: Iwe7IcssService, public ele: ElementRef) {
    super(injector);
    this.setStyleInputs(["width", "backgroundColor"]);
  }
}
