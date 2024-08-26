import { Component, OnInit, inject } from '@angular/core';
import { UserhomeComponent } from '../user/userhome/userhome.component';
import { AuthService } from '../roles/auth.service';

@Component({
  selector: 'app-intial-home',
  standalone: true,
  imports: [UserhomeComponent],
  templateUrl: './intial-home.component.html',
  styleUrl: './intial-home.component.css'
})
export class IntialHomeComponent implements OnInit {
  private authService = inject( AuthService)
  rol:any
  ngOnInit(): void {
    
    console.log(this.authService.getUserRole())
    this.rol = this.authService.getUserRole()
  }


}
