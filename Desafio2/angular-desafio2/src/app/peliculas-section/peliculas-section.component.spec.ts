import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasSectionComponent } from './peliculas-section.component';

describe('PeliculasSectionComponent', () => {
  let component: PeliculasSectionComponent;
  let fixture: ComponentFixture<PeliculasSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeliculasSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
