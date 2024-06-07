import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { EditorialesComponent } from './componentes/editoriales/editoriales.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'editoriales', component: EditorialesComponent },
];
