import { Injectable, Component } from '@angular/core';

@Component({
  selector: 'nextbutton',
  template: ` {{ nextfunc() }} `
})

export class NextService {

  constructor() { }

  nextfunc() {
    next() {
      let step1, step2, step3, step4, step5, step6, step7;
      let step = step1;
      switch (step) {
        case step1:
          step = 'step2';
          step1 = document.getElementById('step1');
          step1.classList.remove('is-active');
          step1.classList.add('is-complete');

        case step2:
          step = 'step3';
            step2.classList.remove("is-active");
            step2.classList.add("is-complete");
            step3.classList.add("is-active");
      }
  }
}
