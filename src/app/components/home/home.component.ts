/*
 * @Author: your name
 * @Date: 2021-02-16 22:17:33
 * @LastEditTime: 2021-02-16 22:37:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AngularHello\src\app\components\home\home.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgUrl = 'https://www.baidu.com/img/dong_8f1d47bcb77d74a1e029d8cbb3b33854.gif';

  list: any =[
    {title:'1'}, {title:'2'}, {title:'3'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
