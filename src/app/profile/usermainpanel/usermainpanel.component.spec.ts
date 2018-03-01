import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermainpanelComponent } from './usermainpanel.component';

describe('UsermainpanelComponent', () => {
  let component: UsermainpanelComponent;
  let fixture: ComponentFixture<UsermainpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermainpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
