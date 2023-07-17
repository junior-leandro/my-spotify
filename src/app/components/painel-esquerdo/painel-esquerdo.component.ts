import { Component, OnInit} from '@angular/core';
import { faHome, faSearch, faGuitar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/Interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})

export class PainelEsquerdoComponent implements OnInit {

  menuSelecionado = 'Home';

  playlists: IPlaylist[] = [];

  //icons
  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar; 
  playlistIcone = faMusic;
  
  constructor( private spotifyService: SpotifyService){}

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  botaoClick(botao: string){
    this.menuSelecionado = botao;
  }

  async buscarPlaylists(){
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
    console.log(this.playlists);
  }
}
