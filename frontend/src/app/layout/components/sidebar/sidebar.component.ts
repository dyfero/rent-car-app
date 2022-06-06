import { Component, ElementRef, OnInit, ViewChild, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationService, NavigationItem } from "../../../config/menu/menu";
import { SidebarService } from "../../../shared/services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('nav')
  nav: ElementRef | undefined;

  public menuItems: NavigationItem[] = [];
  public isCollapsed = true;
  public sidebarCollapsed = true;

  constructor(
    private _router: Router,
    private _menuService: NavigationService,
    private _renderer: Renderer2,
    private _sidebarService: SidebarService
  ) {
  }

  ngOnInit() {
    this.menuItems = this._menuService.initNavigation();
    this._router.events.subscribe((event) => {
      this.isCollapsed = true;
    });

    this._sidebarService.get().subscribe(res => this.switch(res));

    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd && window.innerWidth <= 768) {
        this.hide();
        this._sidebarService.state = false;
      }
    });
  }

  ngAfterViewInit(): void {
    if (window.innerWidth <= 768) {
      this.sidebarCollapsed = true;
      this._sidebarService.state = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if ((event.target.innerWidth <= 768 && !this._sidebarService.state) || (event.target.innerWidth <= 768 && !this.sidebarCollapsed)) {
      this.hide();
      this.setMainContentStyle(0);
      this._sidebarService.state = false;
      this.sidebarCollapsed = true;
      this.setOverflow(false);
    } else if (event.target.innerWidth >= 768 && this.sidebarCollapsed) {
      this.show();
      this._sidebarService.state = true;
      this.sidebarCollapsed = false;
      this.setOverflow(false);
    }
  }

  toggle(): void {
    this._sidebarService.toggle();
  }

  switch(state: boolean): void {
    state ? this.show() : this.hide();
  }

  show(): boolean {
    const el = this.nav?.nativeElement;
    this._renderer.setStyle(el, 'margin-left', '0');
    this.collapseMainContent(250);
    this.overflow(true);
    return false;
  }

  hide(): boolean {
    const el = this.nav?.nativeElement;
    this._renderer.setStyle(el, 'margin-left', '-250px');
    this.collapseMainContent(0);
    this.overflow(false);
    return true;
  }

  collapseMainContent(value: number): void {
    if (window.innerWidth <= 768) {
      return;
    }

    this.setMainContentStyle(value);
  }

  private setMainContentStyle(value: number): void {
    const mainContent = document.querySelector('.main-content');
    this._renderer.setStyle(mainContent, 'margin-left', `${value}px`);
  }

  private overflow(state: boolean): void {
    if (window.innerWidth >= 768) {
      return;
    }
    this.setOverflow(state);
  }

  private setOverflow(state: boolean): void {
    const body = document.querySelector('body');
    if (state) {
      this._renderer.addClass(body, 'overflow-hidden');
      this.overlay(true);
    } else {
      this.overlay(false);
      this._renderer.removeClass(body, 'overflow-hidden');
    }
  }

  private overlay(show: boolean): void {
    const overlay = document.querySelector('.overlay');
    const opacity = show ? '.3' : '0';
    const zIndex = show ? '1' : '-1';

    this._renderer.setStyle(overlay, 'opacity', opacity);
    this._renderer.setStyle(overlay, 'z-index', zIndex);
  }
}
