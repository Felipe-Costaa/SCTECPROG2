import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { categorias } from './categorias';
import { CategoriasService } from './categorias.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listacategorias: categorias[] = []
  novaCategoria: categorias = {} as categorias
  MusicasCategoria: number = 0

  constructor(private service: CategoriasService) { }

  ngOnInit(): void{
    this.loadData()
  }

  loadData(): void {
    this.service.getTodasCategorias().subscribe(itens =>
      this.listacategorias = itens
      )
    
  }

  loadCategoriaPorId(id: number){
    this.service.getCategoriaById(id).subscribe(item =>
      this.novaCategoria = item
      )
  }

  saveCategory(form: NgForm) {
    this.service.postNovaCategoria(this.novaCategoria).subscribe(items => {
      form.resetForm()
      this.loadData()
      this.novaCategoria = {} as categorias
    })
  }

}
