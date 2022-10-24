import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-home-features',
  templateUrl: './home-features.component.html',
  styles: [
  ]
})
export class HomeFeaturesComponent implements OnInit {

  features: {title: string, icon: string, description: string}[];

  ngOnInit(): void {
    this.features = [
      {
        title : 'Planifier sa semaine',
        icon : 'assets/img/calendar.png',
        description : 'Visibilité sur les 7 prochains jours'
      },
      {
        title : 'Atteindre ses objectifs',
        icon : 'assets/img/award.png',
        description : 'Priorisation des tâches'
      },
      {
        title : 'Ananlyser sa productivité',
        icon : 'assets/img/diagram.png',
        description : 'Visualiser le travail accompli'
      }
    ];
  }

}
