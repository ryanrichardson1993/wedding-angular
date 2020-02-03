import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OosComponent } from './oos.component';

describe('OosComponent', () => {
  let component: OosComponent;
  let fixture: ComponentFixture<OosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
