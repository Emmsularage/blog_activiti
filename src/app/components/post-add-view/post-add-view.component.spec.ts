import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddViewComponent } from './post-add-view.component';

describe('PostAddViewComponent', () => {
  let component: PostAddViewComponent;
  let fixture: ComponentFixture<PostAddViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
