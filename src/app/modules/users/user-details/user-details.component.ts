import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../core/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
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
}
