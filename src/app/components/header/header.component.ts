import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  search ='';
  userLoggedIn=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.setItem('loggedIn',String(this.userLoggedIn));
  }

  onSearch():void{
    this.router.navigate(['/home'],{
      queryParams:{
        search:this.search
      }
    });
  }
  changeUserStatus(): void {
    this.userLoggedIn = !this.userLoggedIn;
    localStorage.setItem('loggedIn', String(this.userLoggedIn));
  }
}
