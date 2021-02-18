/*
 * @Author: your name
 * @Date: 2021-02-16 21:49:49
 * @LastEditTime: 2021-02-18 09:38:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AngularHello\src\app\components\news\news.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title = 'Hello world';

  constructor() { }

  ngOnInit() {
  }

  resetTitle(){
    localStorage.setItem('newtitle', this.title);
    this.title = null;
  }
}
