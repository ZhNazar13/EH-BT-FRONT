import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user.service';
import {UserModel} from '../model/user.model';
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
    private userDto: any;
    private userModel: UserModel;

    constructor(private userService: UserService,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getAllUser();
    }

    getAllUser(): void {
        this.userService.getAllUser().subscribe(res => {
            console.log(res);
            this.dataSource = res;
        })
    }

    deleteUser(id): void {
        this.userService.deleteUserById(id).subscribe(res2 => {
            console.log(res2);
            this.dataSource = res2;
        })
    }

    openDialog(element, action) {
        console.log(element);
        const dialogData = {
            model: element,
            action: action
        };

        const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {data: dialogData, width: '600px'});

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.getAllUser();
        });
    }
}
