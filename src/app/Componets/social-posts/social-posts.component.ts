import { Component } from '@angular/core';
import { Post } from '../../Models/post';
import { PostFormComponent } from '../post-form/post-form.component';
import { SocialPostComponent } from '../social-post/social-post.component';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [PostFormComponent,SocialPostComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
Allposts: Post[]= [
{
title: "I'm sleepy",
thought:"Need the sleeps",
votes:4
},
{
  title: "I love food",
  thought: "Food is so good yummy yummy.",
  votes:8
}
]
addPost(p:Post):void{
  this.Allposts.push(p);
}
}
