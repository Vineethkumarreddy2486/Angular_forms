import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutFromBuilderComponent } from './without-from-builder.component';

describe('WithoutFromBuilderComponent', () => {
  let component: WithoutFromBuilderComponent;
  let fixture: ComponentFixture<WithoutFromBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithoutFromBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutFromBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
