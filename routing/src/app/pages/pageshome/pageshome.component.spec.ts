import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageshomeComponent } from './pageshome.component';

describe('PageshomeComponent', () => {
  let component: PageshomeComponent;
  let fixture: ComponentFixture<PageshomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageshomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
