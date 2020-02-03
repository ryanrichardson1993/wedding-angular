import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OosEveningComponent } from './oos-evening.component';

describe('OosEveningComponent', () => {
  let component: OosEveningComponent;
  let fixture: ComponentFixture<OosEveningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OosEveningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OosEveningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
