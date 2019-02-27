import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  constructor(private fire : AngularFireAuth, private router : Router) { }
  pwd : string;
  email : string;
  ngOnInit() {
  }
  MyLogin(){
    this.fire.auth.signInWithEmailAndPassword(this.email, this.pwd).then(user => {
      this.router.navigateByUrl('/dashbord');
    }).catch(event =>{
      alert(event)
    })
  }
}
