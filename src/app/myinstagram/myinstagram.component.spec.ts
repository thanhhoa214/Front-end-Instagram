import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinstagramComponent } from './myinstagram.component';

describe('MyinstagramComponent', () => {
  let component: MyinstagramComponent;
  let fixture: ComponentFixture<MyinstagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinstagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
