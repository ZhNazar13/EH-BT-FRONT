import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UserModel} from '../../model/user.model';
import {UserService} from '../../service/user.service';
import {RoleService} from '../../service/role.service';

@Component({
    selector: 'app-user-control-dialog',
    templateUrl: './user-control-dialog.component.html',
    styleUrls: ['./user-control-dialog.component.css']
})
export class UserControlDialogComponent implements OnInit {
    dataSource = [];
    roleList = [];
    selected;

    // list_roles = new RolesModel();
    title = 'Добавление профиля';

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private userService: UserService,
                private roleService: RoleService) {
        console.log(data);
        if (data.action === 'add') {
            this.data.model = new UserModel();
            this.data.model.id = 0;
        } else if (data.action === 'edit') {
            if (data.model.role) {
                this.title = 'Редактирование профиля';
                this.selected = data.model.role.id;
            }
        }
    }

    ngOnInit(): void {
        console.log('input data:', this.data);
        this.getRoleList();
    }

    saveUser() {
        const userRequestModel = new UserModel();
        userRequestModel.id = this.data.model.id;
        userRequestModel.login = this.data.model.login;
        userRequestModel.arcfl = this.data.model.arcfl;
        userRequestModel.password = this.data.model.password;
        userRequestModel.roleId = this.data.model.roleId;
        this.userService.createUser(userRequestModel).subscribe(res => {
            console.log(res);
        })
    }

    // Выбор справочника ролей
    getRoleList() {
        this.roleService.getAllRoles().subscribe(res => {
            this.roleList = res;
        });
    }
}
