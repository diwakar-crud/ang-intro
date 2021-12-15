import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationIntroComponent } from './application-intro.component';

describe('ApplicationIntroComponent', () => {
  let component: ApplicationIntroComponent;
  let fixture: ComponentFixture<ApplicationIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
