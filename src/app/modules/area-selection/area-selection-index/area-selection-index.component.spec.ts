import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSelectionIndexComponent } from './area-selection-index.component';

describe('AreaSelectionIndexComponent', () => {
  let component: AreaSelectionIndexComponent;
  let fixture: ComponentFixture<AreaSelectionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaSelectionIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSelectionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
