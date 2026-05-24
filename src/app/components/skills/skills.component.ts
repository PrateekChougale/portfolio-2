import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  categories = [
    {
      icon: '🤖', title: 'Automation Frameworks',
      skills: [
        { abbr: 'Se', name: 'Selenium', level: 'Advanced', fill: 90 },
        { abbr: 'Pw', name: 'Playwright', level: 'Proficient', fill: 80 },
        { abbr: 'Cu', name: 'Cucumber', level: 'Advanced', fill: 85 },
        { abbr: 'Ka', name: 'Karate', level: 'Proficient', fill: 75 }
      ]
    },
    {
      icon: '🔌', title: 'API & Testing Tools',
      skills: [
        { abbr: 'Po', name: 'Postman', level: 'Advanced', fill: 85 },
        { abbr: 'RA', name: 'RestAssured', level: 'Proficient', fill: 80 },
        { abbr: 'TN', name: 'TestNG', level: 'Proficient', fill: 75 },
        { abbr: 'JU', name: 'JUnit', level: 'Intermediate', fill: 70 }
      ]
    },
    {
      icon: '💻', title: 'Languages & DevOps',
      skills: [
        { abbr: 'Ja', name: 'Java', level: 'Advanced', fill: 85 },
        { abbr: 'SQ', name: 'SQL', level: 'Intermediate', fill: 65 },
        { abbr: 'Gt', name: 'Git & GitHub', level: 'Intermediate', fill: 70 },
        { abbr: 'Jk', name: 'Jenkins', level: 'Intermediate', fill: 60 }
      ]
    }
  ];
}
