import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public imagem = 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png';
  public exibe = false;
  public descricao = 'Say my name';
  public usuario = 'Heisenberg';
  public profissao = 'Professor de Química';

  public lista = [
    {
      id: '1',
      year: '2007',
      cert: 'Meth Cooking'
    },
    {
      id: '2',
      year: '2009',
      cert: 'Cartel Wipe-out'
    },
    {
      id: '3',
      year: '2013',
      cert: 'Neo-nazi Killer'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPerfil(){
    this.exibe = true;
  }

  public ocultarPerfil(){
    this.exibe = false;
  }
  
}
