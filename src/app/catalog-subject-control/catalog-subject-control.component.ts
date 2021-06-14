import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../service/subject.service';
import {MatDialog} from '@angular/material/dialog';
import {SubjectControlDialogComponent} from './subject-control-dialog/subject-control-dialog.component';
import {PageEvent} from '@angular/material/paginator';

@Component({
    selector: 'app-catalog-subject-control',
    templateUrl: './catalog-subject-control.component.html',
    styleUrls: ['./catalog-subject-control.component.css']
})
export class CatalogSubjectControlComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'actions'];
    dataSource = [];
    pageableResponse: any;
    page = 0;
    size = 5;
    length: 0;
    pageEvent: any;

    constructor(private subjectService: SubjectService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllSubjectsByPage();
    }

    getAllSubjectsByPage() {
        this.subjectService.getAllSubjectsByPage(this.page, this.size).subscribe(res => {
            this.pageableResponse = res;
            this.dataSource = res.content;
            this.length = res.totalElements;
        })
    }

    public getServerData(event?: PageEvent) {
        this.page = event.pageIndex;
        this.size = event.pageSize;
        this.getAllSubjectsByPage();
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
            this.getAllSubjectsByPage();
        });
    }

    deleteSubject(id): void {
        this.subjectService.deleteSubjectById(id).subscribe(res => {
            console.log(res);
            this.getAllSubjectsByPage();
        })
    }

    refresh() {
        this.getAllSubjectsByPage();
    }
}
