import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../Models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
@Output() submitted = new EventEmitter<Post>();
display: boolean = false;
formPost: Post = {} as Post;

submitPost():void{
  this.formPost.votes= 0;
  this.submitted.emit({...this.formPost});
  this.toggleDisplay();
}

toggleDisplay(): void{
  this.display = !this.display;
}
}
