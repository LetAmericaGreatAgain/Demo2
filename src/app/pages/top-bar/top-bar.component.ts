import { Component } from '@angular/core';
import {NzMenuModule} from "ng-zorro-antd/menu";

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [
    NzMenuModule
  ],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.less'
})
export class TopBarComponent {

}
