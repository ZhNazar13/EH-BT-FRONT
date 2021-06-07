import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SubjectService} from '../../service/subject.service';
import {SubjectModel} from '../../model/subject.model';

@Component({
    selector: 'app-subject-control-dialog',
    templateUrl: './subject-control-dialog.component.html',
    styleUrls: ['./subject-control-dialog.component.css']
})
export class SubjectControlDialogComponent implements OnInit {
    title = 'Adding new subject';

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, private subjectService: SubjectService) {
        console.log(data)
        if (data.action === 'add') {
            data.model = new SubjectModel();
            data.model.id = 0;

        } else {
            this.title = 'Editing subject id:' + data.model.id;
        }

    }

    ngOnInit(): void {
    }

    subjectAction() {
        this.subjectService.createSubject(this.data.model).subscribe(res => {
            console.log(res);
        })
    }
}
