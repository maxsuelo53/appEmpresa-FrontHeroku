import { Component } from '@angular/core';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {  NavigationCancel, Router,
          Event,NavigationEnd,
          NavigationError, NavigationStart,
        } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  /**
   *
   */
  constructor(private slimLoadingBarService: SlimLoadingBarService, private router: Router) {
    this.router.events.subscribe((event: Event)=>{
      this.navigationInterceptor (event);
    });
  }

  private navigationInterceptor(event: Event): void{
    if (event instanceof NavigationStart){
      this.slimLoadingBarService.start();
    }
    if (event instanceof NavigationEnd){
      this.slimLoadingBarService.complete();
    }
    if (event instanceof NavigationCancel){
      this.slimLoadingBarService.stop();
    }
    if (event instanceof NavigationError){
      this.slimLoadingBarService.stop();
    }

  }
}
