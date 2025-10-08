import {
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { Chart as ChartJS } from 'chart.js';

@Component({
  selector: 'app-chart',
  template: `
    <div>
      <canvas #ctx></canvas>
    </div>
  `,
})
export class Chart {

  canvasEl = viewChild.required<ElementRef<HTMLCanvasElement>>('ctx');

  ngAfterViewInit() {
    new ChartJS(this.canvasEl().nativeElement, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
