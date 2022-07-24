import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycProfileComponent } from './kyc-profile.component';

describe('KycProfileComponent', () => {
  let component: KycProfileComponent;
  let fixture: ComponentFixture<KycProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
