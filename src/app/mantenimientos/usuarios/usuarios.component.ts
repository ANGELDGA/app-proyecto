import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { UsuarioService } from '../../service/users/usuario.service';
import { User } from '../../models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  user: User = new User();
  registerForm: FormGroup;
  users: User[] = [];
  displayedColumns: string[] = ['id', 'username', 'password', 'email', 'firstName', 'lastName', 'actions'];


  constructor(private fb: FormBuilder, private userService: UsuarioService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(response => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.userService.registerUser(this.registerForm.value).subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
    }
  }



}
