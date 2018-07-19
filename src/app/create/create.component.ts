import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  error: boolean;

  createForm = new FormGroup({
    milkInLiter: new FormControl(),
    rateperLiter: new FormControl('', Validators.required),
    sugarInKg: new FormControl(),
    rateperKg: new FormControl(),
    coffeePowderRate: new FormControl(),
    teaPowderRate: new FormControl(),
    otherCost: new FormControl(),
    income: new FormControl(),
    date: new FormControl(),
    totalExpense: new FormControl(),
    profit: new FormControl(),
  });

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.error = false;
  }

  createEntry() {
    this.api.createEntry(this.createForm.value).subscribe(
      data => {
        console.log(data);
        this.createForm.reset();
      }
    );
  }

  calculate() {

    if (this.createForm.status === 'INVALID') {
      this.error = true;
      return;
    }

    this.error = false;

      let total = 0;
      const f = this.createForm.value;
      total += f.milkInLiter * f.rateperLiter;
      total += f.sugarInKg * f.rateperKg;
      this.createForm.value.profit = f.income - total;
      console.log(this.createForm.value.profit);
      this.createForm.setValue(this.createForm.value);
  }

}
