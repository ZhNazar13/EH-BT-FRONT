import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../service/subject.service';
import {MatDialog} from '@angular/material/dialog';
import {SubjectControlDialogComponent} from './subject-control-dialog/subject-control-dialog.component';

@Component({
    selector: 'app-catalog-subject-control',
    templateUrl: './catalog-subject-control.component.html',
    styleUrls: ['./catalog-subject-control.component.css']
})
export class CatalogSubjectControlComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'actions'];
    dataSource = [];

    constructor(private subjectService: SubjectService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllSubject();
    }

    getAllSubject() {
        this.subjectService.getAllSubjects().subscribe(res => {
            this.dataSource = res;
        })
    }

    openDialog(model, action: string) {
        const dialogData = {
            model: model,
            action: action
        };
        const dialogRef = this.dialog.open(SubjectControlDialogComponent,
            {
                data: dialogData,
                width: '600px'
            }
        );

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getAllSubject();
        });
    }

    deleteSubject(id): void {
        this.subjectService.deleteSubjectById(id).subscribe(res => {
            console.log(res);
            this.getAllSubject();
        })
    }

    refresh() {
        this.getAllSubject();
    }
}
