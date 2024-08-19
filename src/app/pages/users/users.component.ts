import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../shared/service/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  private usersService = inject(UserService);

  public users = toSignal(
    this.usersService.getUsers()
  )
}
