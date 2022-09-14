import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/Models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private location: Location  ) { }

  ngOnInit(): void {
    const id =+this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => this.post = post);
  }

}
