import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TransactionResponse } from '../interfaces/req-response';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private getAllTransactions = 'transactions/all';
  public http = inject(HttpClient);

  private urlBase = `${environment.backend.url}`;

  getTransactions(): Observable<any> {
    return this.http.get<TransactionResponse[]>(`${this.urlBase}/${this.getAllTransactions}`);
  }

}
