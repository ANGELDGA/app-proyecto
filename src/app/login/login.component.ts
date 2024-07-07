import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit(): void {
    if (this.loginForm.valid) {
      const { usuario, password } = this.loginForm.value;
      const isSuccess = this.authService.login(usuario, password);
      if (isSuccess) {
        this.router.navigateByUrl("/mantenimientos");
      } else {
        this.loginError = 'Usuario o contraseña incorrecta';
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  regresar(): void {
    this.router.navigateByUrl("/dashboard");
  }
}
