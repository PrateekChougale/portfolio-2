import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs = [
    {
      date: '2024 — Present', role: 'Software Automation Test Engineer', company: 'Your Company Name', active: true,
      items: [
        'Designed and maintained Selenium + Java automation frameworks using Page Object Model (POM) architecture',
        'Implemented BDD test suites using Cucumber-JVM with Gherkin feature files',
        'Built API test automation with RestAssured and Karate for RESTful microservices validation',
        'Integrated automated test suites into CI/CD pipelines using Jenkins and Maven',
        'Performed cross-browser testing with Selenium Grid and Playwright across Chrome, Firefox, and Edge'
      ],
      tags: ['Selenium', 'Java', 'Cucumber', 'RestAssured', 'Jenkins']
    },
    {
      date: '2023 — 2024', role: 'QA Intern / Junior Test Engineer', company: 'Your Previous Company', active: false,
      items: [
        'Executed manual and automated test cases for web applications',
        'Wrote and maintained test scripts using Selenium WebDriver with Java',
        'Created detailed bug reports in Jira with clear reproduction steps',
        'Participated in Agile ceremonies — sprint planning, daily standups, and retrospectives'
      ],
      tags: ['Manual Testing', 'Selenium', 'Jira', 'Agile']
    }
  ];
}
