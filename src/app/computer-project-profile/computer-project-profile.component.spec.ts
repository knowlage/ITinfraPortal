import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerProjectProfileComponent } from './computer-project-profile.component';

describe('ComputerProjectProfileComponent', () => {
  let component: ComputerProjectProfileComponent;
  let fixture: ComponentFixture<ComputerProjectProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerProjectProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerProjectProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
