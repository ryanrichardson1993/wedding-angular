import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OosDaytimeComponent } from './oos-daytime.component';

describe('OosDaytimeComponent', () => {
  let component: OosDaytimeComponent;
  let fixture: ComponentFixture<OosDaytimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OosDaytimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OosDaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
