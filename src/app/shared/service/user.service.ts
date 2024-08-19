import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { environment } from '../../../../environment';
import { UserRequest, UserResponse } from '../interfaces/req-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUser = 'users/all';
  getUser = 'users';
  userNew = 'users/new'
  public http = inject(HttpClient);

  private urlBase = `${environment.backend.url}`;

  getUsers(): Observable<any> {
    return this.http.get<UserResponse[]>(`${this.urlBase}/${this.getAllUser}`);
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>(`${this.urlBase}/${this.getUser}/${id}`)
      .pipe(
        delay(1500),
        map(resp => resp)
      );
  }

  setUser(dataUser: UserRequest): Observable<any> {
    return this.http.put(
      `${this.urlBase}/${this.userNew}`,
      dataUser
    );
  }
}
