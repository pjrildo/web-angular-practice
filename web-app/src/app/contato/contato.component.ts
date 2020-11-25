import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Contato } from '../shared/contato/contato';
import { ContatoService } from '../shared/contato/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  contato = {} as Contato;
  contatos: Contato[];
  
  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm) {
      let dados = `
        Nome: ${form.value.nome}
        Idade: ${form.value.idade}      
      `;

    console.log(dados);
  }

  saveContato(form: NgForm) {    
    console.log(this.contato);
    this.contatoService.saveContato(this.contato).subscribe(() => {
      this.cleanForm(form);
    });  
  }

     // Chama o serviço para obtém todos os usuários
    getContatos() {
      this.contatoService.getContatos().subscribe((contatos: Contato[]) => {
        this.contatos = contatos;
      });
    }

    // limpa o formulario
    cleanForm(form: NgForm) {  
      form.resetForm();
      this.contato = {} as Contato;      
    }

}
