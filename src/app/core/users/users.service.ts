import { Injectable } from '@angular/core';
import { Login } from 'src/app/shared/models/login.model';
import { UsersUrls } from 'src/app/configs/api-urls.config';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(page: any) {
    return this.http.get(UsersUrls.listUsers, { params: { page: page } });
  }

  getUserById(id: any) {
    return this.http.get(UsersUrls.singleUser + id);
  }

  addUser(user: User) {
    return this.http.post(UsersUrls.createUser, { params: user });
  }

  updateUser(id: any, changes: any) {
    return this.http.put(UsersUrls.updateUser + id, { params: changes });
  }

  deleteUser(userId: any) {
    return this.http.delete(UsersUrls.deleteUser + '/' + userId);
  }
}
