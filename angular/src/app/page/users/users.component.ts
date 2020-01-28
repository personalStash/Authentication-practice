import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/src/app/service/user.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  userList: Array<User>;
  searchText: string = '';
  changeCounter: number = 0;

  constructor(private ps: UserService) {

  }

  ngOnInit() {
    this.userSubscription = this.ps.read().subscribe(
      user => {
        this.userList = user;
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onDelete(id: number): void {
    this.ps.delete(id).forEach(data => {
      let index = this.userList.findIndex(user => user.user_id == id);
      this.userList.splice(index, 1);
      this.changeCounter++;
    });
  }

}
