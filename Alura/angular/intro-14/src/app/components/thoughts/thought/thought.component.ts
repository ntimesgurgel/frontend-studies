import { Component, Input } from '@angular/core';
import { Thought } from '../thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  @Input() thought: Thought = {
    id: 1,
    content: 'I Love Angular',
    authorship: 'Nathan',
    model: 'modelo3'
  }

  widthThought(): string {
    if(this.thought.content.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
