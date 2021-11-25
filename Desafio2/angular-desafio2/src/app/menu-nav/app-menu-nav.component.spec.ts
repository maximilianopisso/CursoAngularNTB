import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuNavComponent } from './app-menu-nav.component';

describe('AppMenuNavComponent', () => {
  let component: AppMenuNavComponent;
  let fixture: ComponentFixture<AppMenuNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMenuNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
