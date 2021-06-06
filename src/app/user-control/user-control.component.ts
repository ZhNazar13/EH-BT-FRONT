import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {MatDialog} from '@angular/material/dialog';
import {UserControlDialogComponent} from './user-control-dialog/user-control-dialog.component';
import {PageEvent} from '@angular/material/paginator';

@Component({
    selector: 'app-user',
    templateUrl: './user-control.component.html',
    styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {
    displayedColumns: string[] = ['id', 'login', 'arcfl', 'role_id', 'actions'];
    dataSource = [];
    pageableResponse: any;
    page = 0;
    size = 5;
    length: 0;
    pageEvent: any;

    constructor(private userService: UserService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllUsersByPage();
    }

    getAllUsersByPage(): void {
        this.userService.getAllUsersByPage(this.page, this.size).subscribe(res => {
            this.pageableResponse = res;
            this.dataSource = res.content;
            this.length = res.totalElements;
        })
    }

    public getServerData(event?: PageEvent) {
        this.page = event.pageIndex;
        this.size = event.pageSize;
        this.getAllUsersByPage();
    }

    deleteUser(id): void {
        this.userService.deleteUserById(id).subscribe(res2 => {
            console.log(res2);
            this.getAllUsersByPage();
        })
    }

    openDialog(model, action) {
        console.log(model);
        const dialogData = {
            model: model,
            action: action
        };

        const dialogRef = this.dialog.open(UserControlDialogComponent, {data: dialogData, width: '600px'});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getAllUsersByPage();
        });
    }
}
