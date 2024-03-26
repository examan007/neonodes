import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeolistComponent } from './neolist.component';

describe('NeolistComponent', () => {
  let component: NeolistComponent;
  let fixture: ComponentFixture<NeolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
