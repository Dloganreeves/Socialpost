import { Component, Input } from '@angular/core';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-social-post',
  standalone: true,
  imports: [],
  templateUrl: './social-post.component.html',
  styleUrl: './social-post.component.css'
})
export class SocialPostComponent {
@Input() displayPost = {} as Post

Addvote(): void{
  this.displayPost.votes++;
}
}
