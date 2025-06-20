import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneroLivros } from './genero-livros';

describe('GeneroLivros', () => {
  let component: GeneroLivros;
  let fixture: ComponentFixture<GeneroLivros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneroLivros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneroLivros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
