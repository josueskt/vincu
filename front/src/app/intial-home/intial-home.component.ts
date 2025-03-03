import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BooleanInput } from '@angular/cdk/coercion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { UserhomeComponent } from '../user/userhome/userhome.component';
import { AdminhomeComponent } from '../admin/adminhome/adminhome.component';

import { AuthService } from '../roles/auth.service';
import { VunculadorhomeComponent } from '../vinculador/vunculadorhome/vunculadorhome.component';
import { FundacionFormComponent } from '../vinculador/fundacion-form/fundacion-form.component';

@Component({
  selector: 'app-intial-home',
  standalone: true,
  imports: [
    UserhomeComponent,
    AdminhomeComponent,
    VunculadorhomeComponent,
    FundacionFormComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './intial-home.component.html',
  styleUrl: './intial-home.component.css'
})
export class IntialHomeComponent implements OnInit {
  @ViewChild('drawer') drawer: any;

  mdcBackdrop: BooleanInput = false;
  drawerMode: MatDrawerMode = "push";
  rol: any;

  private authService = inject(AuthService);
  private router = inject(Router);

  readonly breakpoint$ = this.breakpointObserver.observe(['(max-width: 500px)']);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() => this.breakpointChanges());
  }

  ngOnInit(): void {
    if (!this.authService.getToken()) {
      this.router.navigate(['/login']);
    }
    console.log(this.authService.getUserRole());
    this.rol = this.authService.getUserRole();
  }

  breakpointChanges(): void {
    if (this.breakpointObserver.isMatched('(max-width: 500px)')) {
      this.drawerMode = "over";
      this.mdcBackdrop = true;
    } else {
      this.drawerMode = "push";
      this.mdcBackdrop = false;
    }
  }

  toggleDrawer() {
    this.drawer.toggle();
  }

  salir() {
    this.authService.clearToken();
    window.location.reload();
  }
}