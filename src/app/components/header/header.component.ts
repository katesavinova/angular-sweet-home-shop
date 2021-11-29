import { Component, OnInit,Output,EventEmitter } from '@angular/core';
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
    localStorage.setItem('LoggedIn',String(this.userLoggedIn));
  }
  @Output() show: EventEmitter<void> = new EventEmitter<void>();

  showCart():void{
    this.show.emit();

  }
  onSearch():void{
    this.router.navigate(['/home'],{
      queryParams:{
        serch:this.search
      }
    });
  }
  changeUserStatus(): void {
    this.userLoggedIn = !this.userLoggedIn;
    localStorage.setItem('LoggedIn', String(this.userLoggedIn));
  }
}
