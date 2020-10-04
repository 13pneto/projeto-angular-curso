import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Pro Angular 9: Build Powerful and Dynamic Web Apps - 4th ed. Edition',
    rating: 4.29122,
    numeroPaginas: 809,
    preco: 57.84,
    dataLancamento: new Date(2020, 6, 1),
    url: 'https://amzn.to/3j3fSiD'
  }

  livros: string[] = ['Java', 'Angular 2'];

  constructor() { }

  ngOnInit(): void {
  }

}
