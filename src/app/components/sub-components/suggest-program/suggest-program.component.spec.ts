import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestProgramComponent } from './suggest-program.component';

describe('SuggestProgramComponent', () => {
  let component: SuggestProgramComponent;
  let fixture: ComponentFixture<SuggestProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestProgramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
