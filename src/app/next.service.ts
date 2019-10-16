import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'nextbutton',
  template: ` {{ nextfunc() }} `
})

export class NextService {

  constructor() { }

  nextfunc() {
  }
}
