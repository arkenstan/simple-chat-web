import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Credentials } from '@app/core/models/users.model';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: [ './login-form.component.scss' ]
})
export class LoginFormComponent implements OnInit {
	loginForm = this.fb.group({
		email: [ '', [ Validators.email, Validators.required ] ],
		password: [ '', Validators.required ]
	});

	@Output() submitted = new EventEmitter<Credentials>();

	constructor(private fb: FormBuilder) {}

	ngOnInit() {}

	submitForm() {
		if (this.loginForm.valid) {
			console.log(this.loginForm.value);
			this.submitted.emit(this.loginForm.value);
		} else {
			console.log('Login Error');
		}
	}
}
