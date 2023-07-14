import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent implements OnInit {

  @Input()
  descricao = 'junhooo';

  constructor() {}

  ngOnInit(): void{
  }

}
