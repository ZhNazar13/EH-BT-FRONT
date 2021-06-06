import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RolesModel} from '../model/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private readonly ROLES_CONTROL = '/api/private/v1/role';

  constructor(private http: HttpClient) {
  }

  getAllRoles(): Observable<any> {
    return this.http.get(`${this.ROLES_CONTROL}/all`);
  }
}
