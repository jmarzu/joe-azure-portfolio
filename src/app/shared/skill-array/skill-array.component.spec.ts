import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillArrayComponent } from './skill-array.component';

describe('SkillArrayComponent', () => {
  let component: SkillArrayComponent;
  let fixture: ComponentFixture<SkillArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
