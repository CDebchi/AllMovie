import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private fire : AngularFireAuth, private root : Router) { }

  ngOnInit() {
  }
  Logout(){
    this.fire.auth.signOut().then(() => {
      this.root.navigateByUrl('');
    })
    this.root.navigate(['']);
  }

}
