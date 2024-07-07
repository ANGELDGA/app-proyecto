import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-mantenimientos',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './mantenimientos.component.html',
  styleUrl: './mantenimientos.component.css'
})
export class MantenimientosComponent {
  constructor(private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ){

  }
  salir(): void{
    this.authService.logout(); //se encarga de eliminar
    this.router.navigateByUrl("/login") //redirigir
  }

  irManten():void{
    this.router.navigate(["mantenimientos"],{relativeTo: this.route})
  }

  irProducto():void{
    this.router.navigate(["product"],{relativeTo: this.route})
  }

  irUsuarios():void{
    this.router.navigate(["usuarios"],{relativeTo: this.route})
  }

  irAnuncio():void{
    this.router.navigate(["anuncios"],{relativeTo: this.route})
  }

}
