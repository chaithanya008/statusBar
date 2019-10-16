import { Component } from '@angular/core';
import { NextService } from "./next.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NextService],
})
export class AppComponent {
  title = 'statusBar';
}
