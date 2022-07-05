import { Component, OnInit } from '@angular/core';
import { musicas } from './musicas';
import { MusicasService } from './musicas.service';
import { CategoriasComponent } from '../categorias/categorias.component';
import { categorias } from '../categorias/categorias';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {

  constructor(private service: MusicasService, private activatedRoute: ActivatedRoute) { }
  




   novaMusica: musicas = {} as musicas
   listaMusicas: musicas[] = []
   categoriaMusica: categorias = {} as categorias

   ngOnInit() {
    const par = this.activatedRoute.snapshot.paramMap.get('categorias');
    //this.categoriaMusica = par
    //Tentativa de capturar o objeto passado como parametro para a rota
    //para ter o ID da categoria da musica
  }
  

  loadData(): void{
    this.service.getTodasMusicasCategoria(this.categoriaMusica.id).subscribe(itens =>{
      this.listaMusicas = itens
    })
  }
  postMusic(form: NgForm) {
    this.service.postMusics(this.novaMusica).subscribe(items => {
      //Faltou o id da categoria
      form.resetForm()
      this.loadData()
      this.novaMusica = {} as musicas
    })

}
}
