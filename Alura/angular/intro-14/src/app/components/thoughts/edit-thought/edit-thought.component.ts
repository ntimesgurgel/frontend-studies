import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent {
  
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    model: 'model1'
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.service.searchId(id).subscribe(thought=>{
      this.thought = thought
    })
  }

  editThought(){
    this.service.create(this.thought).subscribe(
      ()=>this.router.navigate(['/listThought'])
    )
  }

  cancel(){
    this.router.navigate(['/listThought'])
  }
}
