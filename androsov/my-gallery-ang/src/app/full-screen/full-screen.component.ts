import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {
  src: string;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.activateRoute.params
        .subscribe( params => this.src = `http://localhost:4200/assets/images/${params['src']}.jpg` );
  }

}
