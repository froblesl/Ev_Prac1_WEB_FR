import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  sumBlendCafes: number = 0;
  sumCafeOrigen: number = 0;
  constructor(private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe(
      (response: any) => {
        this.cafes = response;
        this.calculateBlendSum();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  ngOnInit() {
    this.getCafes();
    this.calculateBlendSum();
  }

  calculateBlendSum() {
    this.sumBlendCafes = this.cafes.reduce((sum, cafe) => {
      return cafe.tipo === 'Blend' ? sum + 1 : sum;
    }, 0);

    this.sumCafeOrigen = this.cafes.reduce((sum, cafe) => {
      return cafe.tipo !== 'Blend' ? sum + 1 : sum;
    }, 0);
  }

}
