import { Component, OnInit } from '@angular/core';
import { ReaderService } from 'src/app/service/reader.service';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-reader-structure',
  templateUrl: './reader-structure.component.html',
  styles: [],
})
export class ReaderStructureComponent implements OnInit {
  constructor(public service: ReaderService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      Id: 0,
      Name: '',
      Address: '',
      LastName: '',
      EMail: '',
    };
  }

  onSubmit(form: NgForm) {
    this.service.postReader(form.value).subscribe(
      (reset) => {
        this.resetForm(form);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
