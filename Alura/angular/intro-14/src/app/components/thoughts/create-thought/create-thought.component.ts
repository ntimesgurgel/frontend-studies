import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {

  thought: Thought = {
    content: '',
    authorship: '',
    model: 'model1'
  }

  constructor(
    private service: ThoughtService,
    private router: Router
    ) {}

  createThought(){
    this.service.create(this.thought).subscribe(
      ()=>this.router.navigate(['/listThought'])
    )
  }

  cancel(){
    this.router.navigate(['/listThought'])
  }
}
