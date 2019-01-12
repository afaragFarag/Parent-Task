import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../core/users/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userForm: FormGroup;
  user: any;
  id: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersServive: UsersService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usersServive.getUserById(this.id).subscribe((result: any) => {
      console.log(result);
      this.user = result.data;
      this.setFormValue();
    });
  }
  // bind user data to be ready to be edited
  setFormValue(): any {
    this.userForm.setValue({
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      avatar: this.user.avatar
    });
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      avatar: ['', [Validators.required]]
    });
  }

  update() {
    if (this.userForm.valid) {
      this.usersServive
        .updateUser(this.id, this.userForm.value)
        .subscribe((result: any) => {
          this.router.navigate(['users']);
          alert('updated successfully at' + result.updatedAt);
          this.router.navigate(['users']);
        });
    }
  }
}
