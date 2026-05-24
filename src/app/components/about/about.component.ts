import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  highlights = [
    { icon: '🎯', title: 'Test Strategy', desc: 'Designing frameworks from scratch with POM, Data-Driven & BDD patterns' },
    { icon: '⚡', title: 'CI/CD Integration', desc: 'Automating test pipelines with Jenkins, GitHub Actions & Maven' },
    { icon: '🔍', title: 'Bug Hunter', desc: 'Finding critical defects before they reach production' }
  ];
}
