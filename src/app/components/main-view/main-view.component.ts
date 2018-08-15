import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {IPost} from '../../models/post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})

export class MainViewComponent implements OnInit, OnDestroy {

  posts: IPost[];
  private subscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.subscription = this.postService.subject.subscribe(
      (posts) => this.posts = posts,
    (error) => console.log(error)
    );
    this.postService.loadPosts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
