import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShimmerTitleComponent } from './shimmer-title.component';

describe('ShimmerTitleComponent', () => {
  let component: ShimmerTitleComponent;
  let fixture: ComponentFixture<ShimmerTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShimmerTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShimmerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
