import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectprofileComponent } from './selectprofile.component';

describe('SelectprofileComponent', () => {
  let component: SelectprofileComponent;
  let fixture: ComponentFixture<SelectprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
