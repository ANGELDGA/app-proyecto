import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router,
    private route: ActivatedRoute
  ){

  }

  ingresar():void{
    this.router.navigateByUrl("/login")
  }

  irHome():void{
    this.router.navigate(["home"],{relativeTo: this.route})
  }

  irList():void{
    this.router.navigate(["list"],{relativeTo: this.route})
  }

  irOfertas():void{
    this.router.navigate(["ofertas"],{relativeTo: this.route})
  }

}
