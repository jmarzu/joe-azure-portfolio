import { Component } from '@angular/core';
import { faAngular, faReact, faJsSquare, faHtml5, faCss3, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faPerson, faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  faContact = faAddressBook;
  faAbout = faPerson;
  faSkills = faCode;
  faAngular = faAngular;
  faReact = faReact;
  faJavaScript = faJsSquare;
  faHTML = faHtml5;
  faCSS = faCss3;
  faNode = faNodeJs;
}
  