import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLIvro } from './livro';

describe('CardLIvro', () => {
  let component: CardLIvro;
  let fixture: ComponentFixture<CardLIvro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLIvro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLIvro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
