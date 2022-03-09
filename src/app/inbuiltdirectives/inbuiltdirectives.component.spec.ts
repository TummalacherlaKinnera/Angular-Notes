import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltdirectivesComponent } from './inbuiltdirectives.component';

describe('InbuiltdirectivesComponent', () => {
  let component: InbuiltdirectivesComponent;
  let fixture: ComponentFixture<InbuiltdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuiltdirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
