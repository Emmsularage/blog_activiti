import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IPost } from '../models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private locker = false;
  private posts: IPost[];
  public subject = new Subject<IPost[]>();

  public constructor(private httpClient: HttpClient) { }

  public emitPosts(): void {
    this.subject.next(this.posts);
  }

  private lock() {
    this.locker = true;
  }

  private unlock() {
    this.locker = false;
  }

  private isLocked() {
    return this.locker;
  }

  public loadPosts(): boolean {
    if (!this.isLocked()) {
      this.lock();
      this.httpClient.get<IPost[]>('posts.json').subscribe(
        (response) => {
            this.posts = response || [];
            this.posts.sort((a, b) => b.time - a.time);
            this.unlock();
            this.emitPosts();
          },
        (error) => { console.log(error); this.unlock(); this.emitPosts(); }
      );
      return true;
    } else {
      return false;
    }
  }

  public savePosts(): boolean {
    if (!this.isLocked()) {
      this.lock();
      this.httpClient.put<IPost[]>('posts.json', this.posts).subscribe(
        (response) => { console.log('Save posts: Success'); this.unlock(); this.emitPosts(); },
      (error) => { console.log(error); this.unlock(); this.emitPosts(); }
      );
      return true;
    } else {
      return false;
    }
  }

  public addPost(post: IPost): void {
    this.posts.unshift(post);
    this.savePosts();
    this.emitPosts();
  }

  public deletePost(index: number): void {
    this.posts.splice(index, 1);
    this.savePosts();
    this.emitPosts();
  }

}
