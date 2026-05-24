import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  contactCards = [
    { icon: '📧', title: 'Email', value: 'prateek.chougale@email.com' },
    { icon: '📍', title: 'Location', value: 'India' },
    { icon: '💼', title: 'LinkedIn', value: 'linkedin.com/in/prateekchougale' },
    { icon: '🐙', title: 'GitHub', value: 'github.com/prateekchougale' }
  ];

  onSubmit() {
    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 3000);
  }
}
