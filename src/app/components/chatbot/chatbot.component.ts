import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface ChatMessage {
  text: string;
  isUser: boolean;
  isTyping?: boolean;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  isOpen = false;
  showBadge = true;
  showSuggestions = true;
  userInput = '';
  messages: ChatMessage[] = [
    { text: "👋 Hi there! I'm Prateek's virtual assistant. Ask me anything about his skills, experience, or projects!", isUser: false }
  ];

  suggestions = [
    { label: '💡 Skills', question: "What are Prateek's skills?" },
    { label: '💼 Experience', question: 'Tell me about his experience' },
    { label: '🚀 Projects', question: 'What projects has he worked on?' },
    { label: '📬 Contact', question: 'How can I contact Prateek?' }
  ];

  private knowledge: Record<string, string> = {
    skills: "Prateek specializes in:\n\n🔧 **Automation Frameworks:** Selenium (Java), Playwright, Cucumber (BDD), Karate\n🔌 **API Testing:** Postman, RestAssured\n🧪 **Test Frameworks:** TestNG, JUnit\n💻 **Languages:** Java, SQL\n⚙️ **DevOps:** Git, GitHub, Jenkins, Maven\n📊 **Methodologies:** Agile, Scrum, Page Object Model, Data-Driven Testing",
    experience: "Prateek has 1-2 years of experience:\n\n🟢 **Current — Automation Test Engineer**\n• Selenium + Java frameworks with POM\n• BDD suites with Cucumber-JVM\n• API automation with RestAssured & Karate\n• CI/CD with Jenkins & Maven\n\n🔵 **Previous — QA Intern**\n• Manual & automated testing\n• Bug reports in Jira\n• Agile ceremonies",
    projects: "Key projects:\n\n🧪 **E-Commerce Test Framework** — 200+ Selenium + Cucumber scenarios, 95% pass rate\n🔌 **Karate API Suite** — Schema validation & HTML reporting\n🎭 **Playwright Suite** — Cross-browser with parallel execution\n📊 **RestAssured Validator** — CRUD, auth flows & Extent reports",
    contact: "Reach Prateek at:\n\n📧 prateek.chougale@email.com\n💼 linkedin.com/in/prateekchougale\n🐙 github.com/prateekchougale\n📍 India\n\nOr use the contact form!",
    selenium: "Prateek has advanced Selenium expertise — POM pattern, dynamic elements, explicit/implicit waits, Selenium Grid for parallel cross-browser testing.",
    playwright: "Proficient in Playwright — auto-waiting, network interception, parallel execution across Chromium, Firefox, WebKit.",
    cucumber: "Advanced BDD with Cucumber-JVM — Gherkin feature files, stakeholder-readable scenarios, Java step definitions.",
    karate: "Uses Karate for API testing — automation, mocking, performance testing, RESTful microservices validation with schema checks.",
    api: "Skilled in API testing — Postman & RestAssured for CRUD, OAuth/JWT auth, schema validation, comprehensive reports.",
    hire: "Prateek is open to opportunities! 🚀\n• SDET\n• Automation Test Engineer\n• QA Engineer\n\nReach out via the contact section!",
    hello: "Hey there! 👋 I can tell you about Prateek's skills, experience, projects, or how to contact him. What would you like to know?",
  };

  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) this.showBadge = false;
  }

  close() { this.isOpen = false; }

  sendMessage() {
    if (!this.userInput.trim()) return;
    const text = this.userInput.trim();
    this.userInput = '';
    this.showSuggestions = false;

    this.messages.push({ text, isUser: true });
    this.messages.push({ text: '', isUser: false, isTyping: true });

    setTimeout(() => {
      this.messages = this.messages.filter(m => !m.isTyping);
      this.messages.push({ text: this.getResponse(text), isUser: false });
    }, 600 + Math.random() * 800);
  }

  askSuggestion(question: string) {
    this.userInput = question;
    this.sendMessage();
  }

  private getResponse(input: string): string {
    const q = input.toLowerCase();
    if (/hi|hello|hey/.test(q)) return this.knowledge['hello'];
    if (/skill|tech|stack|framework/.test(q)) return this.knowledge['skills'];
    if (/experience|work|job|career/.test(q)) return this.knowledge['experience'];
    if (/project|portfolio|built/.test(q)) return this.knowledge['projects'];
    if (/contact|email|reach|linkedin|github/.test(q)) return this.knowledge['contact'];
    if (/selenium/.test(q)) return this.knowledge['selenium'];
    if (/playwright/.test(q)) return this.knowledge['playwright'];
    if (/cucumber|bdd/.test(q)) return this.knowledge['cucumber'];
    if (/karate/.test(q)) return this.knowledge['karate'];
    if (/api|rest|postman/.test(q)) return this.knowledge['api'];
    if (/hire|job|opportunit|available/.test(q)) return this.knowledge['hire'];
    if (/who|about|prateek/.test(q)) return "Prateek Chougale is a Software Automation Test Engineer from India with 1-2 years of experience in Selenium, Playwright, Cucumber, Karate & API testing. 🎯";
    if (/thank/.test(q)) return "You're welcome! 😊 Feel free to ask anything else.";
    if (/bye/.test(q)) return "Goodbye! 👋 Thanks for visiting!";
    return "I can help with Prateek's **skills**, **experience**, **projects**, or **contact info**. Try asking! 😊";
  }

  formatText(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  }
}
