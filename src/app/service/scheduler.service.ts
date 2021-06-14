import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SchedulerModel} from '../model/schedulerModel';

@Injectable({
    providedIn: 'root'
})
export class SchedulerService {
    private readonly SCHEDULER_CONTROL = '/api/private/v1/schedule';

    constructor(private http: HttpClient) {
    }

    createItem(schedulerModel: SchedulerModel): Observable<any> {
        return this.http.post(`${this.SCHEDULER_CONTROL}`, schedulerModel);
    }

    deleteItemById(id): Observable<any> {
        return this.http.delete(`${this.SCHEDULER_CONTROL}/id/${id}`);
    }
}
