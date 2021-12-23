import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ServicosComponent } from './servicos/servicos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ItemsComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'pre-footer', component: HomeComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
