import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-investing',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder,
              private router: Router) {
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
      this.router.navigate(['/invest']);
    }
  }
}
