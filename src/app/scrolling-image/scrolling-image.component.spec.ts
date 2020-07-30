import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingImageComponent } from './scrolling-image.component';

describe('ScrollingImageComponent', () => {
  let component: ScrollingImageComponent;
  let fixture: ComponentFixture<ScrollingImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
