import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = '';
  username: string = '';
  message: string = '';
  posts: Post[] = [];
  constructor() {}

  post() {
    this.posts.push(new Post(this.title, this.username, this.message));
  }
  ngOnInit(): void {
  }

}
