import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'localizacao',
    loadChildren: () => import('./pages/localizacao/localizacao.module').then( m => m.LocalizacaoPageModule)
  },
  {
    path: 'ponto-coleta',
    loadChildren: () => import('./pages/ponto-coleta/ponto-coleta.module').then( m => m.PontoColetaPageModule)
  },
  {
    path: 'consultar',
    loadChildren: () => import('./pages/consultar/consultar.module').then( m => m.ConsultarPageModule)
  },
  {
    path: 'abrir',
    loadChildren: () => import('./pages/abrir/abrir.module').then( m => m.AbrirPageModule)
  },
  {
    path: 'listar copy',
    loadChildren: () => import('./pages/listar copy/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/listar/listar.module').then( m => m.ListarPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
