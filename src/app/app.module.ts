import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './models/api-interceptor';
import { RouterModule, Routes} from '@angular/router';
import { NotFoundViewComponent } from './components/not-found-view/not-found-view.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { PostAddViewComponent } from './components/post-add-view/post-add-view.component';
import { PostViewComponent } from './components/main-view/post-view/post-view.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'posts', component: MainViewComponent },
  { path: '', component: MainViewComponent },
  { path: 'posts/new', component: PostAddViewComponent },
  { path: 'not-found', component: NotFoundViewComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundViewComponent,
    MainViewComponent,
    PostAddViewComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    FormBuilder,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
