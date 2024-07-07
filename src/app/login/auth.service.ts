import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registeredUsers = [
    { usuario: 'uniqueUser', password: 'password123' }
  ];

  constructor() { }

  login(usuario: string, password: string): boolean {
    const user = this.registeredUsers.find(u => u.usuario === usuario && u.password === password);
    if (user) {
      sessionStorage.setItem("uniqueUser", "true");
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    sessionStorage.clear();
  }

  isLogged(): boolean {
    return !!sessionStorage.getItem("isLogged");
  }

}