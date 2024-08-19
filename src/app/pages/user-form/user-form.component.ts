import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../shared/service/user.service';
import { UserRequest } from '../../shared/interfaces/req-response';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, SweetAlert2Module],
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  private usersService = inject(UserService);
  private router = inject(Router);

  formUser = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  sendData() {
    if (this.formUser.valid) {
      const dataUser: UserRequest = {
        name: this.formUser.get('name')!.value,
        email: this.formUser.get('email')!.value,
      };

      this.usersService.setUser(dataUser).subscribe(() => {
        Swal.fire({
          title: "Usuario creado!",
          text: "Click para ir al listado de usuarios!",
          icon: "success"
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/users']);
          }
        });
      });
    }

  }
}
