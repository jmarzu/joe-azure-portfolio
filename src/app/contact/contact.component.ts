import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  faLinkedIn = faLinkedin;
  faGithub = faGithub;

  showAlert: boolean = false;

  constructor(
    public fb: FormBuilder,
    public emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [''],
      email: [''],
      subject: [''],
      message: ['']
    });
  }

  submitForm() {
    this.showAlert = true;
    this.emailService.sendEmail(this.contactForm.value);
    this.contactForm.reset();
    setTimeout(() => this.showAlert = false, 5000);
  }
}
