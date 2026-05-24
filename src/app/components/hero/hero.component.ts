import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  typedText = '';
  private titles = ['Automation Test Engineer', 'Selenium Expert', 'Playwright Developer', 'API Testing Specialist', 'SDET', 'Quality Advocate'];
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: any;

  stats = [
    { value: 0, target: 2, suffix: '+', label: 'Years Experience' },
    { value: 0, target: 15, suffix: '+', label: 'Projects Tested' },
    { value: 0, target: 500, suffix: '+', label: 'Test Cases Automated' }
  ];

  codeLines: string[] = [];
  private allCodeLines = [
    '<span class="an">@Test</span>',
    '<span class="kw">public void</span> <span class="fn">shouldLoginSuccessfully</span>() {',
    '    <span class="cm">// Navigate to login page</span>',
    '    driver.get(<span class="str">"https://app.example.com/login"</span>);',
    '',
    '    <span class="cm">// Enter credentials</span>',
    '    loginPage.enterUsername(<span class="str">"prateek"</span>);',
    '    loginPage.enterPassword(<span class="str">"*****"</span>);',
    '    loginPage.clickLogin();',
    '',
    '    <span class="cm">// Verify dashboard loads</span>',
    '    Assert.assertTrue(',
    '        dashboardPage.isDisplayed(),',
    '        <span class="str">"Dashboard should be visible"</span>',
    '    );',
    '}',
  ];

  ngOnInit() {
    setTimeout(() => this.typeEffect(), 800);
    this.animateCounters();
    this.animateCode();
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    clearTimeout(this.typeTimer);
  }

  private typeEffect() {
    const current = this.titles[this.titleIndex];
    if (!this.isDeleting) {
      this.typedText = current.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.typeTimer = setTimeout(() => this.typeEffect(), 2000);
        return;
      }
      this.typeTimer = setTimeout(() => this.typeEffect(), 60);
    } else {
      this.typedText = current.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        this.typeTimer = setTimeout(() => this.typeEffect(), 400);
        return;
      }
      this.typeTimer = setTimeout(() => this.typeEffect(), 30);
    }
  }

  private animateCounters() {
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.stats.forEach(s => s.value = Math.round(s.target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    setTimeout(() => requestAnimationFrame(animate), 500);
  }

  private animateCode() {
    let i = 0;
    const addLine = () => {
      if (i < this.allCodeLines.length) {
        this.codeLines.push(this.allCodeLines[i]);
        i++;
        setTimeout(addLine, 120);
      }
    };
    setTimeout(addLine, 600);
  }

  scrollTo(id: string, event: Event) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
