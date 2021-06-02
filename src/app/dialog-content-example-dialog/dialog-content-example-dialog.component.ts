import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserModel} from '../model/user.model';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.component.html',
  styleUrls: ['./dialog-content-example-dialog.component.css']
})
export class DialogContentExampleDialogComponent implements OnInit {
  addingUserModel: UserModel;
  dataSourse = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) {
    if (data.action === 'add') {
      data.model = new UserModel();
      data.model.id = 0;
    }
  }

  ngOnInit(): void {
  }

  userAction() {
    const dataForService = new UserModel();
    dataForService.id = this.data.model.id;
    dataForService.password = this.data.model.password;
    dataForService.login = this.data.model.login;
    dataForService.arcfl = this.data.model.arcfl;
    dataForService.roleId = this.data.model.roleId;
    this.userService.createUser(dataForService).subscribe(res => {
      console.log(res);
    })
  }

}
