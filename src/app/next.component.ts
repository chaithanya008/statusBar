import { Component, Directive } from '@angular/core';

@Component({
  selector: 'next-button',
  template: `<button (click) = "nextfunc()">Next</button>`
})

export class NextComponent {

  nextfunc() {
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

      case step3:
          step3.classList.remove("is-active");
          step3.classList.add("is-complete");
          step4.classList.add("is-active");
      case step4:
          step = 'complete';
          step4.classList.remove("is-active");
          step4.classList.add("is-complete");
      case 'complete':
          step = 'step1';
          step4.classList.remove("is-complete");
          step3.classList.remove("is-complete");
          step2.classList.remove("is-complete");
          step1.classList.remove("is-complete");
          step1.classList.add("is-active");
    }
  }
}
