import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationItem, NavigationService } from "../../../config/menu/menu";
import { SidebarService } from "../../../shared/services/sidebar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus: any;
  public navigation: any[];
  public location: Location;
  public title?: string;

  constructor(
    location: Location,
    private _element: ElementRef,
    private _router: Router,
    private _navigationService: NavigationService,
    private _sidebarService: SidebarService
  ) {
    this.location = location;
    this.navigation = this._navigationService.initNavigation().filter(listTitle => listTitle);
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.initTitle();
      }
    });
  }

  ngOnInit() {
  }


  /**
   * Ustawienie tytuły strony
   * @private
   */
  private initTitle() {
    let title = this.location.prepareExternalUrl(this.location.path());
    if (title.charAt(0) === '#') {
      title = title.slice(1);
    }

    this.getTitle(this.navigation, title);
  }

  /**
   * Przeszukiwanie elementów nawigacji
   * i porówywanie ścieżki nawigacji z adresem url.
   * Jeśli znaleziono ścieżkę === url przypisanie klucza do zmiennej title.
   *
   * @param navigation - elementy nawigacji
   * @param title - url
   * @private
   */
  private getTitle(navigation: NavigationItem[], title: string): string {
    if (!navigation.length) {
      return 'menu.title.dashboard';
    }

    navigation.forEach(nav => {
      if (nav.path === title) {
        this.title =  nav.title;
      }

      if (nav.children?.length) {
        this.getTitle(nav.children, title);
      }
    })

    return '';
  }

  toggleSidebar() {
    this._sidebarService.toggle();
  }
}
