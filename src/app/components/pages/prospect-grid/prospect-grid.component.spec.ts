import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectGridComponent } from './prospect-grid.component';

describe('ProspectGridComponent', () => {
  let component: ProspectGridComponent;
  let fixture: ComponentFixture<ProspectGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProspectGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProspectGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
