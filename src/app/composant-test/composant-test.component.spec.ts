import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantTestComponent } from './composant-test.component';

describe('ComposantTestComponent', () => {
  let component: ComposantTestComponent;
  let fixture: ComponentFixture<ComposantTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
