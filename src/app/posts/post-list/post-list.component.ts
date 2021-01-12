import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // posts = [
  //   {
  //     title: 'First Post',
  //     description: 'This is a description',
  //   },
  //   {
  //     title: 'Second Post',
  //     description: 'This is a description',
  //   }
  // ];

  @Input() posts=[]
}
