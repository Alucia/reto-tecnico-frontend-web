import { Component, inject, Input } from '@angular/core';
import { BalanceService } from '../../shared/service/balance.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BalanceResponse } from '../../shared/interfaces/req-response';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-balances',
  imports: [CommonModule, RouterModule],
  templateUrl: './balances.component.html',
  styleUrl: './balances.component.scss'
})
export class BalancesComponent {
  @Input() idUser!: number;
  url!: string;

  private balanceService = inject(BalanceService);
  private router = inject(Router);

  public balances = toSignal(
    this.balanceService.getBalances()
      .pipe(
        map(balance => balance.filter((value: BalanceResponse) => value.idUser === this.idUser))
      )
  )


  goTransactions(idAccount: number) {
    const url = `/user/${this.idUser}/transactions/${idAccount}`;
    this.router.navigate([url]);
  }
}
