import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbaDataComponent } from './nba-data.component';

describe('NbaDataComponent', () => {
  let component: NbaDataComponent;
  let fixture: ComponentFixture<NbaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbaDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
