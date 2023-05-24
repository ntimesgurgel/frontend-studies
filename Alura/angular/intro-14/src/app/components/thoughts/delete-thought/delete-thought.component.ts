import { Component } from '@angular/core';
import { Thought } from '../thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteThoughtComponent {
  thought: Thought = {
    id: 0,
    content: "",
    authorship: "",
    model: "model1"
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id: number = parseInt( this.route.snapshot.paramMap.get('id')! )
    this.service.searchId(id).subscribe((thought)=>{
      this.thought = thought
    })
  }

  deleteThought() {
    if(this.thought.id){
      this.service.delete(this.thought.id).subscribe(()=>{
        this.router.navigate(['/listThoughts'])
      })
    }
  }

  cancel() {
    this.router.navigate(['/listThoughts'])
  }
}
