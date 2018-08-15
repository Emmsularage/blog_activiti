import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {IPost} from '../../../models/post';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  @Input() public index: number;
  @Input() public post: IPost;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  public onLikePost(): void {
    this.post.likes++;
    this.postService.savePosts();
  }

  public onDislikePost(): void {
    this.post.dislikes++;
    this.postService.savePosts();
  }

  public onDeletePost(): void {
    this.postService.deletePost(this.index);
  }

}
