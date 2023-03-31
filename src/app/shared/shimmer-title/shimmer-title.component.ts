import { Component, Input } from '@angular/core';

@Component({
  selector: 'shimmer-title',
  templateUrl: './shimmer-title.component.html',
  styleUrls: ['./shimmer-title.component.scss']
})
export class ShimmerTitleComponent {
  @Input() title: string = '';
  @Input() largeTitle: boolean = false;
}
