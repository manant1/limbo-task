import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  additionalResources = [{
    description: "Learn more about LIMBO while you're waiting, read our customer stories and see how the program transformed theirs lives, or go see our blog article to learn about amazing LIMBO science.",
    links: [{
      title: "customer stories",
      url: "#"
    }, {
      title: "limbo blog",
      url: "#"
    }]
  }, {
    description: "You can prepare for your LIMBO journey! Watch our tutorials, so when you're selected, you can jump right in and get started with the program",
    links: [{
      title: "how to use app",
      url: "#"
    }, {
      title: "how to setup devices",
      url: "#"
    }]
  }]
}
