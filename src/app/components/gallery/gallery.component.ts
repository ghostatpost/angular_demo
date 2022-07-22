import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../../../interfaces/galleryImage';
@Component({
  selector: 'edureka-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public galleryimage : GalleryImage[]= [
    {
      Heading : "image1",
      SubHeading : "sub1",
      ImageURL : "https://wallpaperaccess.com/full/51360.jpg"
    },
    {
      Heading : "image2",
      SubHeading : "sub2",
      ImageURL : "https://wallpaperaccess.com/full/51361.jpg"
    },
    {
      Heading : "image3",
      SubHeading : "sub3",
      ImageURL : "https://wallpaperaccess.com/full/51362.jpg"
    },
  ]
  public isUpdate=true
  constructor() { }

  ngOnInit(): void {
    
  }
  ShowAlertMessage()
    {
      alert("duniya madarchod hai")
    }
  ShowUpdate()
  {
    this.isUpdate=false
  }
  HideUpdate()
  {
    this.isUpdate=true
  }
}
