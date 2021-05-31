import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogContentExampleDialogComponent} from '../dialog-content-example-dialog/dialog-content-example-dialog.component';

@Component({
    selector: 'app-user',
    templateUrl: './user-control.component.html',
    styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {
    displayedColumns: string[] = ['id', 'login', 'arcfl', 'role_id', 'actions'];
    dataSource = [];

    constructor(private userService: UserService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.userService.getAllUser().subscribe(res => {
            console.log(res);
            this.dataSource = res;
        });
    }

    openDialog(element) {
        console.log(element);
        const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {data: element});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

}
