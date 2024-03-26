import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonodeComponent } from './neonode.component';

describe('NeonodeComponent', () => {
  let component: NeonodeComponent;
  let fixture: ComponentFixture<NeonodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeonodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NeonodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
