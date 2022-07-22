import { Component, Input, OnInit } from '@angular/core';
import  { Article } from "../../../interfaces/articles" ;


@Component({
  selector: 'edureka-article-callouts',
  templateUrl: './article-callouts.component.html',
  styleUrls: ['./article-callouts.component.css']
})
  
export class ArticleCalloutsComponent implements OnInit {
   @Input() articles !: Article
  constructor() { }

  ngOnInit(): void {
  }

}
