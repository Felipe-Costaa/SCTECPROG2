import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { musicas } from './musicas';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private httpClient: HttpClient) { }

  private urlAPI = 'https://music-api-2022.herokuapp.com/musics'

  getTodasMusicasCategoria(id: number): Observable<musicas[]>{
    return this.httpClient.get<musicas[]>(this.urlAPI+'/'+id)
  }

  postMusics(music: musicas) : Observable <musicas> {
    return this.httpClient.post<musicas>(this.urlAPI, music)
  }

}
