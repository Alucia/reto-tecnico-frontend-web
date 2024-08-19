import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TransactionService } from '../../shared/service/transaction.service';
import { map } from 'rxjs';
import { TransactionResponse } from '../../shared/interfaces/req-response';
import { BackButtonComponent } from '../../shared/components/back-button/back-button.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, BackButtonComponent],
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  private route = inject(ActivatedRoute);
  private transactionService = inject(TransactionService);

  public idAccount = Number(this.route.snapshot.paramMap.get('idAccount'));
  public transactions = toSignal(
    this.transactionService.getTransactions()
      .pipe(
        map(transaction => transaction.filter((value: TransactionResponse) => value.idAccount === this.idAccount))
      )
  )

}
