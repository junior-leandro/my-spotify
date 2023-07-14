import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEsquerdoComponent } from './painel-esquerdo.component';

describe('PainelEsquerdoComponent', () => {
  let component: PainelEsquerdoComponent;
  let fixture: ComponentFixture<PainelEsquerdoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelEsquerdoComponent]
    });
    fixture = TestBed.createComponent(PainelEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
