import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-copy-block',
  templateUrl: './copy-block.component.html',
  styleUrls: ['./copy-block.component.scss']
})
export class CopyBlockComponent {
  @Input() title: string = '';
  @Input() paragraph: string = '';
}
