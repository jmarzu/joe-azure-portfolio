import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-array',
  templateUrl: './skill-array.component.html',
  styleUrls: ['./skill-array.component.scss']
})
export class SkillArrayComponent implements OnInit {

  ngOnInit(): void {
    const items = document.getElementsByClassName("fade-item");
		for (let i = 0; i < items.length; ++i) {
      this.fadeIn(items[i], i * 1000)
    }
  }

  fadeIn(item: Element, delay: number | undefined) {
    setTimeout(() => {
      item.classList.add('fadein')
    }, delay)
  }

}
