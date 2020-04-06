import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProfileComponent } from './software-profile.component';

describe('SoftwareProfileComponent', () => {
  let component: SoftwareProfileComponent;
  let fixture: ComponentFixture<SoftwareProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
