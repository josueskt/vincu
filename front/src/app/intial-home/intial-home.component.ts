import { Component, OnInit, inject } from '@angular/core';
import { UserhomeComponent } from '../user/userhome/userhome.component';
import { AuthService } from '../roles/auth.service';
import { Router } from '@angular/router';
import { AdminhomeComponent } from '../admin/adminhome/adminhome.component';
import { VunculadorhomeComponent } from '../vinculador/vunculadorhome/vunculadorhome.component';

@Component({
  selector: 'app-intial-home',
  standalone: true,
  imports: [UserhomeComponent , AdminhomeComponent , VunculadorhomeComponent],
  templateUrl: './intial-home.component.html',
  styleUrl: './intial-home.component.css'
})
export class IntialHomeComponent implements OnInit {
  private authService = inject( AuthService)
  private router = inject(Router)
  rol:any
  ngOnInit(): void {
    if(!this.authService.getToken()){

      this.router.navigate(['/login']);


    }
    console.log(this.authService.getUserRole())
    this.rol = this.authService.getUserRole()
  }


  salir(){
    this.authService.clearToken()
    window.location.reload()
  }
}
