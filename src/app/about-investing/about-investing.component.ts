import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-about-investing',
  templateUrl: './about-investing.component.html',
  styleUrls: ['./about-investing.component.css']
})
export class AboutInvestingComponent implements OnInit {
  signUpForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signUpForm = this.buildForm();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      FirstName: [''],
      LastName: [''],
      Email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.signUpForm.valid) {
      return;
    }
  }
}
