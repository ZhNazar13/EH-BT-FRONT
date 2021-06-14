import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherSchedulerService {
    private readonly TEACHER_SCHEDULER_CONTROLLER = '/api/private/v1/scheduler/teacher';

    constructor(private http: HttpClient) {
    }

    getScheduleByTeacher(teacherId): Observable<any> {
        return this.http.get(`${this.TEACHER_SCHEDULER_CONTROLLER}/all/teacherId/${teacherId}`)
    }
}
