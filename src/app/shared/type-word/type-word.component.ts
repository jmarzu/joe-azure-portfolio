import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-word',
  templateUrl: './type-word.component.html',
  styleUrls: ['./type-word.component.scss']
})
export class TypeWordComponent implements OnInit {
  view: { type: any } = { type: '' };

  ngOnInit(): void {
    let wordMap ={ skill: ['Express','Node','Angular','React'] };

    let idx = 0;
    let n = 0;
    let up = true;

    setInterval(() => {
      let word = wordMap.skill[idx];
      let ln = word.length;

      if (up) {
        this.view.type = word.slice(0,n);
        n++
      };

      if(n === ln + 1){
        up = false
      };

      if (!up) {
        this.view.type = word.slice(0,n);
        n--
      }

      if (n===0) {
        up = true
        idx++
      }

      if(idx === wordMap.skill.length){
        idx = 0
      }

    }, 200);
  }
}
