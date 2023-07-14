import { Component, OnInit} from '@angular/core';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})

export class PainelEsquerdoComponent implements OnInit {

  //icons
  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar; 
  playlistIcon = faMusic;
  
  constructor(){}

  ngOnInit(): void {
  }




}
