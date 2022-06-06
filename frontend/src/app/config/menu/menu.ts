import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

export interface NavigationItem {
  id: string;
  path?: string;
  title?: string;
  icon?: string;
  class?: string;
  active?: boolean;
  meta?: any;
  type:
    | 'basic'
    | 'collapsable'
    | 'divider';
  children?: NavigationItem[]
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(
    private _translocoService: TranslocoService,
  ) {
  }

  /**
   * Init all navigation data.
   */
  initNavigation(): NavigationItem[] {
    return this.initNavigationItems();
  }

  /**
   * Init navigation items.
   */
  private initNavigationItems(): NavigationItem[] {
    return [
      // dashboard
      {
        id: 'dashboard_nav_item',
        title: 'menu.title.dashboard',
        type: 'basic',
        icon: 'ni-tv-2 text-info',
        path: '/dashboard'
      },

      {
        id: 'car_nav_item',
        title: 'menu.title.cars',
        type: 'basic',
        icon: 'fa fa-car',
        path: '/cars',
      },
      {
        id: 'customer_nav_item',
        title: 'menu.title.customers',
        type: 'basic',
        icon: 'fa fa-users',
        path: '/customers',
      },
      {
        id: 'rent_nav_item',
        title: 'menu.title.rents',
        type: 'basic',
        icon: 'fa fa-money-bill',
        path: '/rents',
      },
    ];
  }

  /**
   * Filtrowanie elementów nawigacji według uprawnień użytkownika
   * @param navigationItems - elementy nawigacji-
   * @param permissions - uprawnienia
   */
  private filterNavigation(navigationItems: NavigationItem[], permissions: string[]): NavigationItem[] {
    if (!navigationItems.length || !permissions.length) {
      return [];
    }

    return navigationItems.filter(item => {
      // routing ma dzieci
      if (item.children?.length) {
        item.children = this.filterNavigation(item.children, permissions);
      }

      // przypisany atrybut meta
      if (!item.meta) {
        return true;
      }

      // odrzucenie jeśli użytkownik posiada uprawnienie
      if (item.meta?.except) {
        return !item.meta?.except?.some((value: string) => permissions.includes(value));
      }
      // przypisanie jeśli użytkownik posiada uprawnienie
      else if (item.meta?.only) {
        return item.meta?.only?.some((value: string) => permissions.includes(value));
      }
    });
  }
}
