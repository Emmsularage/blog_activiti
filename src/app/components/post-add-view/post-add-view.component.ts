import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-add-view',
  templateUrl: './post-add-view.component.html',
  styleUrls: ['./post-add-view.component.css']
})
export class PostAddViewComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  public initForm(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  public onSubmitForm(): void {
    const formValue: any = this.form.value;
    const post: Post = new Post(
      formValue['title'],
      formValue['content']
    );
    this.postService.addPost(post);
    this.router.navigate(['/posts']);
  }

}
