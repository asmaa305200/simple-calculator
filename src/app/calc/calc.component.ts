import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  res = ""
  getItem(item: any) {
    this.res += item
    console.log(item);

  }
  equal() {
    this.res = eval(this.res).toFixed(1);
  }
  reset() {
    this.res = '';
  }

  del() {
    this.res =this.res.slice(0,-1);
}


};
