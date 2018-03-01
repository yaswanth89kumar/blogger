import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrightpanelComponent } from './userrightpanel.component';

describe('UserrightpanelComponent', () => {
  let component: UserrightpanelComponent;
  let fixture: ComponentFixture<UserrightpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserrightpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrightpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
