import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit, OnDestroy {
  date: Date = new Date();
  public isCollapsed = true;

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.add("auth-layout");
    let body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this._router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

  }
  ngOnDestroy() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.remove("auth-layout");
    let body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

}
