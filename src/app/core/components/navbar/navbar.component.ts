import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions, Router } from '@angular/router';

@Component({
  selector: 'al-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  homePath: string = 'home';
  loginPath: string = 'login';
  registerPath: string = 'register';

  matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'exact',
    queryParams: 'subset',
    fragment: 'ignored'
};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public isActive(page: string): boolean {
    return this.router.isActive(page, this.matchOptions);
   }

  goToHome(page: string) {
    this.router.navigate([page]);
  }

}
