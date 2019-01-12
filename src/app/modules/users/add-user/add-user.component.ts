import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../core/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
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
  ngOnInit() {}

  createForm() {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      avatar: ['', [Validators.required]]
    });
  }

  add() {
    if (this.userForm.valid) {
      this.usersServive
        .addUser(this.userForm.value)
        .subscribe((result: any) => {
          this.router.navigate(['users']);
          alert(
            'added successfully at' + result.createdAt + 'whith id ' + result.id
          );
          this.router.navigate(['users']);
        });
    }
  }
}
