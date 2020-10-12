import { Component, OnInit, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})

export class BtnComponent implements OnInit {
  constructor() {
    console.log( 'Constructor work' );
   }

  ngOnInit(): void {
    console.log( 'OnInit work' )
  }

  ngOnDestroy(): void {
    console.log( 'OnDestroy work' )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log( 'OnChanges work' )
  }

  addClick() {
    document.getElementById( 'hello' ).style.color =  `green` ;
  }

  @Input() number;
}

