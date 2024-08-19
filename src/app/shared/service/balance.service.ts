import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { BalanceResponse } from '../interfaces/req-response';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  getAllBalances = 'balances/all';
  getBalance = 'balances'
  public http = inject(HttpClient);

  private urlBase = `${environment.backend.url}`;

  getBalances(): Observable<any> {
    return this.http.get<BalanceResponse[]>(`${this.urlBase}/${this.getAllBalances}`);
  }

  getBalanceById(id: string) {
    return this.http.get<BalanceResponse>(`${this.urlBase}/${this.getBalance}/${id}`)
      .pipe(
        map(resp => resp)
      );
  }
}
