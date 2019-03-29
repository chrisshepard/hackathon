import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";
import { MatDialog } from "@angular/material/dialog";

export interface DialogData {
  title: string;

}



@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.sass']
})
export class ResourceListComponent implements OnInit {
  items = [
    {
      imgSRC:"../../../assets/html.png",
      title:"HTML",
      resources: [],

    },
    {
      imgSRC:"../../../assets/css.png",
      title:"CSS",
      resources: [],

    },
    {
      imgSRC:"../../../assets/javascript.png",
      title:"JavaScript",
      resources: [],

    },
    {
      imgSRC:"../../../assets/angular.svg",
      title:"Angular",
      resources: [],

    },
    {
      imgSRC:"../../../assets/react.png",
      title:"React",
      resources: [],

    },
    {
      imgSRC:"../../../assets/node.jpg",
      title:"Node",
      resources: [],

    },

  ]
  constructor(public dialogPopUp: MatDialog) { }

  ngOnInit() {
  }

  openDialog(i): void {
    console.log(i)
    const dialogRef = this.dialogPopUp.open(DialogPopUpComponent, {
      data: {title: this.items[i].title, resources: this.items[i].resources}
    });

  }

}

@Component({
  selector: 'dialog-pop-up',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.sass'],
})
export class DialogPopUpComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {console.log(data)}

  onNoClick(): void {
    this.dialogRef.close();
  }

}