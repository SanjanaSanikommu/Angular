import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompoentComponent } from './mycompoent.component';

describe('MycompoentComponent', () => {
  let component: MycompoentComponent;
  let fixture: ComponentFixture<MycompoentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycompoentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
