import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BooleanInput } from '@angular/cdk/coercion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {  @ViewChild('drawer') drawer: any;

  mdcBackdrop: BooleanInput = false;
  drawerMode: MatDrawerMode = "push";

  readonly breakpoint$ = this.breakpointObserver
    .observe(['(max-width: 500px)']);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanges()
    );
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
}
