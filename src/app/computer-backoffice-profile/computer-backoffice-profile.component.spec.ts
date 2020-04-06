import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerBackofficeProfileComponent } from './computer-backoffice-profile.component';

describe('ComputerBackofficeProfileComponent', () => {
  let component: ComputerBackofficeProfileComponent;
  let fixture: ComponentFixture<ComputerBackofficeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerBackofficeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerBackofficeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
