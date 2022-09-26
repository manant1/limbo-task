import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input("description") description: string = "";
  @Input("links") links: {url: string, title: string}[] = [];
}
