import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SubjectModel} from '../model/subject.model';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    private readonly SUBJECT_CONTROL = '/api/private/v1/subject';

    constructor(private http: HttpClient) {
    }

    createSubject(subjectDTO: SubjectModel): Observable<any> {
        return this.http.post(`${this.SUBJECT_CONTROL}`, subjectDTO);
    }

    getAllSubjects(): Observable<any> {
        return this.http.get(`${this.SUBJECT_CONTROL}/all`);
    }

    deleteSubjectById(id): Observable<any> {
        return this.http.delete(`${this.SUBJECT_CONTROL}/id/${id}`);
    }

    getAllSubjectsByPage(page, size): Observable<any> {
        return this.http.get(`${this.SUBJECT_CONTROL}/page/${page}/size/${size}`);
    }
}
