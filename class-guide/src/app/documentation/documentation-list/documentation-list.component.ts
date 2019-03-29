import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation-list',
  templateUrl: './documentation-list.component.html',
  styleUrls: ['./documentation-list.component.sass']
})
export class DocumentationListComponent implements OnInit {
  items= [
    {
      imgSRC:"../../../assets/angular.svg",
      title:"Angular",
      href: "https://angular.io/"
    },
    {
      imgSRC:"../../../assets/react.png",
      title:"React",
      href: "https://reactjs.org/"
    },
    {
      imgSRC:"../../../assets/node.jpg",
      title:"Node",
      href: "https://nodejs.org/en/docs/"
    },
    {
      imgSRC:"../../../assets/material.png",
      title:"Material Design",
      href: "https://material.angular.io/"
    },
    {
      imgSRC:"../../../assets/bootstrap.png",
      title:"Bootstrap",
      href: "https://getbootstrap.com/"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
