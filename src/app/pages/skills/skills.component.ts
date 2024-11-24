import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  icons = [
    {
      iconPath: 'assets/Icons/spring-boot.svg',
      name: 'Spring boot',
      backShadow: 'back-shadow-spring',
    },
    {
      iconPath: 'assets/Icons/angular.svg',
      name: 'Angular',
      backShadow: 'back-shadow-angular',
    },
    {
      iconPath: 'assets/Icons/react.svg',
      name: 'React',
      backShadow: 'back-shadow-react',
    },
  ];
}
