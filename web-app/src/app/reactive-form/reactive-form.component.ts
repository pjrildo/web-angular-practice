import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { comparePassword } from "./custom-validator.validator";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  formRegister : FormGroup

  submitted = false;
  regex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.formRegister = this.formBuilder.group(
      {
        name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
        cpf: ["", [Validators.pattern(this.regex), Validators.required]],
        age: ["", [Validators.min(18), Validators.required]],
        phone: ["", Validators.required],
        email: ["", [Validators.email, Validators.required]],
        password: ["", [Validators.minLength(8), Validators.required]],
        confirmPassword: ["", [Validators.required]]
      },
      {
        validator: comparePassword("password", "confirmPassword")
      }
    );
  }

  // Necessaria pra retornar o estado dos FormControl do FormGroup
  get f() {
    return this.formRegister.controls;
  }

  onSubmit(){
    this.submitted = true;

    // Retorna false se o form for invalido
    if(this.formRegister.invalid) {
      return;
    }

    console.log("Valores: " + JSON.stringify(this.formRegister.value));
  }
}