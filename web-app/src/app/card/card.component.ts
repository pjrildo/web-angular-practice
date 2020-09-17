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
