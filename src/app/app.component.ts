import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  formulario: any = {componentes: []};
  componenteAtual: any = {};

  types: string[] = ['input', 'select', 'textarea'];

  add() {
    this.formulario.componentes.push(this.componenteAtual);
    this.componenteAtual = {};
  }

}
