/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 observations in the table', () => {
    component.cafes = [
      { id: 1, nombre: 'Café 1', tipo: 'Café de Origen', region: 'Región 1', sabor: "Canela", altura: 1900, imagen: "Imagen1" },
      { id: 2, nombre: 'Café 2', tipo: 'Blend', region: 'Región 2', sabor: "Naranja", altura: 1800, imagen: "Imagen2" },
      { id: 3, nombre: 'Café 3', tipo: 'Café de Origen', region: 'Región 3', sabor: "Manzana", altura: 1700, imagen: "Imagen3" },
    ];
    
    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();

    const dataRows = table.querySelectorAll('tbody tr');
    expect(dataRows.length).toBe(3);

    const expectedData = [
      ['1', 'Café 1', 'Café de Origen', 'Región 1'],
      ['2', 'Café 2', 'Blend', 'Región 2'],
      ['3', 'Café 3', 'Café de Origen', 'Región 3'],
    ];

    for (let i = 0; i < dataRows.length; i++) {
        const cells = dataRows[i].querySelectorAll('td');
        for (let j = 0; j < cells.length; j++) {
            const cellText = cells[j].textContent.trim();
            const expectedCellText = expectedData[i][j];
            expect(cellText).toEqual(expectedCellText);
        }
    }
  });
});
