import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserleftpanelComponent } from './userleftpanel.component';

describe('UserleftpanelComponent', () => {
  let component: UserleftpanelComponent;
  let fixture: ComponentFixture<UserleftpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserleftpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserleftpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
