import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsersService } from 'src/app/core/users/users.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'avatar',
    'actions'
  ];
  dataSource: MatTableDataSource<User>;
  users: User[];
  // to customize data table pagination to wwork with server side pagination
  pagingObjs = { pageIndex: 0, pageSize: 0, length: 0 };
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _usersService: UsersService, private router: Router) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.listUsers(++this.pagingObjs.pageIndex);
  }
  // Filterring users already loaded to dom only
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  listUsers(page: any) {
    this._usersService.getAll(page).subscribe(
      (result: any) => {
        if (!result.data) {
          return null;
        }
        this.users = result.data;
        this.refresh();

        if (page === 1) {
          // note : api starts from 1 and DT from 0
          this.pagingObjs.pageIndex = result.page - 1;
          this.pagingObjs.pageSize = result.per_page;
          this.pagingObjs.length = result.total;
        }
      },
      (error: any) => {}
    );
  }

  add() {
    this.router.navigate(['users/add']);
  }

  update(id: any) {
    this.router.navigate(['users/update', id]);
  }

  // note : delete api returns null !!
  delete(userId: any) {
    this._usersService.deleteUser(userId).subscribe((result: any) => {
      if (result === null) {
        this.users.forEach((user, indx) => {
          if (user.id === userId) {
            this.users.splice(indx, 1);
            this.refresh();
            this.pagingObjs.length--;
            return;
          }
        });
        alert('deleted successfully!!');
      }
    });
  }

  goToDetails(id: any) {
    this.router.navigate(['users/details', id]);
  }

  getNext($event) {
    this.listUsers(++$event.pageIndex);
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.users);
  }
}
