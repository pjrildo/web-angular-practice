import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formCadastro : FormGroup;

  constructor() { 
    this.formCadastro = new FormGroup({
      'nome': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(50)])),
      'email': new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      'telefone': new FormControl(null, Validators.required)
    });

  }

  ngOnInit(): void {
  }

  enviar(){
    let dados = `
      Nome: ${this.formCadastro.value.nome}
      Email: ${this.formCadastro.value.email}
      Telefone: ${this.formCadastro.value.telefone}
    `;

    console.log(dados);
  }
}
