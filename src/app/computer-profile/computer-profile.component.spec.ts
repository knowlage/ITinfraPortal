import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerProfileComponent } from './computer-profile.component';

describe('ComputerProfileComponent', () => {
  let component: ComputerProfileComponent;
  let fixture: ComponentFixture<ComputerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
