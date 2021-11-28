import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  serch ='';
  userLoggedIn=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  @Output() show: EventEmitter<void> = new EventEmitter<void>();

  showCart():void{
    this.show.emit();

  }
  onSerch():void{
    this.router.navigate(['/home'],{
      queryParams:{
        serch:this.serch
      }
    });
  }
  changeUserStatus(): void {
    this.userLoggedIn = !this.userLoggedIn;
    localStorage.setItem('loggedIn', String(this.userLoggedIn));
  }
}
