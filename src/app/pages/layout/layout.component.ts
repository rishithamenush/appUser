import { Component, inject } from '@angular/core';
import {RouterOutlet, Router, RouterLinkActive, RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  private router = inject(Router);

  logout() {
    localStorage.removeItem('logData');
    this.router.navigateByUrl('/login');
  }

  alert(msg: string) {
    alert(msg);
  }
}
