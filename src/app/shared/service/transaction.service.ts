import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environment';
import { map, Observable } from 'rxjs';
import { TransactionResponse } from '../interfaces/req-response';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private getAllTransactions = 'transactions/all';
  // getTransaction = 'transactions'
  public http = inject(HttpClient);

  private urlBase = `${environment.backend.url}`;

  getTransactions(): Observable<any> {
    return this.http.get<TransactionResponse[]>(`${this.urlBase}/${this.getAllTransactions}`);
  }

  // getTransactionById(id: string) {
  //   return this.http.get<TransactionResponse>(`${this.urlBase}/${this.getTransaction}/${id}`)
  //     .pipe(
  //       map(resp => resp)
  //     );
  // }
}
