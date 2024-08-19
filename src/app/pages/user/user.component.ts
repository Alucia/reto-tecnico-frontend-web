import { Component, inject } from '@angular/core';
import { UserService } from '../../shared/service/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { BalancesComponent } from '../balances/balances.component';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';

@Component({
  standalone: true,
  selector: 'app-user',
  imports: [CommonModule, BalancesComponent, RouterModule, BackButtonComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UserService);

  public idUser = Number(this.route.snapshot.paramMap.get('idUser'));
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ idUser }) => this.usersService.getUserById(idUser))
    )
  )
}
