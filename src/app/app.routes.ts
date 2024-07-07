import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ListComponent } from './dashboard/list/list.component';
import { OfertasComponent } from './dashboard/ofertas/ofertas.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core';
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';
import { ProductosComponent } from './mantenimientos/productos/productos.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { AnunciosComponent } from './mantenimientos/anuncios/anuncios.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent,
        children:[
            {path: "home", component: HomeComponent},
            {path: "list", component: ListComponent},
            {path: "ofertas", component: OfertasComponent},
            {path: "**", redirectTo: "home", pathMatch: "full"}
        ]
    },
    {path: "login", component: LoginComponent},
    {path: "mantenimientos", component: MantenimientosComponent,
        children:[
            {path: "product", component: ProductosComponent},
            {path: "usuarios", component: UsuariosComponent},
            {path: "anuncios", component: AnunciosComponent}
        ]
    },
    {path: "**", redirectTo: "dashboard", pathMatch: "full"},

];
