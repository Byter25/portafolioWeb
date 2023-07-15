import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCurriculumComponent } from './seccion-curriculum.component';

describe('SeccionCurriculumComponent', () => {
  let component: SeccionCurriculumComponent;
  let fixture: ComponentFixture<SeccionCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
