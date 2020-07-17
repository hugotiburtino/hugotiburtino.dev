import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyPanelComponent } from './third-party-panel.component';

describe('ThirdPartyPanelComponent', () => {
  let component: ThirdPartyPanelComponent;
  let fixture: ComponentFixture<ThirdPartyPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPartyPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
