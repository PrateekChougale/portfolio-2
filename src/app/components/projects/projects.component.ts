import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      icon: '🧪', name: 'E-Commerce Test Framework', featured: true,
      desc: 'End-to-end Selenium + Cucumber BDD framework for an e-commerce platform. Covers user registration, product search, cart management, checkout flow, and payment gateway validation with 200+ automated scenarios.',
      tech: ['Selenium', 'Java', 'Cucumber', 'Maven', 'TestNG'],
      metrics: [{ value: '200+', label: 'Test Cases' }, { value: '95%', label: 'Pass Rate' }, { value: '3x', label: 'Faster Execution' }]
    },
    {
      icon: '🔌', name: 'API Test Suite — Karate', featured: false,
      desc: 'Comprehensive API testing framework using Karate DSL for RESTful microservices. Includes schema validation, data-driven testing, and performance benchmarks with HTML reporting.',
      tech: ['Karate', 'Java', 'Maven', 'REST API'], metrics: []
    },
    {
      icon: '🎭', name: 'Playwright Cross-Browser Suite', featured: false,
      desc: 'Modern test automation using Playwright for cross-browser and mobile viewport testing. Features auto-waiting, network interception, and parallel execution across Chromium, Firefox, and WebKit.',
      tech: ['Playwright', 'Java', 'CI/CD', 'Docker'], metrics: []
    },
    {
      icon: '📊', name: 'RestAssured API Validator', featured: false,
      desc: 'Java-based API testing framework built with RestAssured and TestNG. Covers CRUD operations, authentication flows, response validation, and generates Extent reports.',
      tech: ['RestAssured', 'TestNG', 'Java', 'Extent Reports'], metrics: []
    }
  ];
}
