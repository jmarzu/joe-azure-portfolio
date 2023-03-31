import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleTextComponent } from './apple-text.component';

describe('AppleTextComponent', () => {
  let component: AppleTextComponent;
  let fixture: ComponentFixture<AppleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
