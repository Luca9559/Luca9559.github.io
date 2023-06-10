import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Post } from '../../models/Post';
import PocketBase from 'pocketbase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  pb = new PocketBase('http://127.0.0.1:8090');
  formData: FormData = new FormData();
  title: string = '';
  username: string = '';
  message: string = '';
  posts: Post[] = [];
  createdRecord!: any;
  constructor() {}

  post() {
    let newPost = new Post(this.title, this.username, this.message);
    this.posts.push(newPost);
    this.createdRecord = this.addPost(newPost);
  }

  async addPost(post: Post) {
    this.formData.append('username', post.username);
    this.formData.append('title', post.title);
    this.formData.append('message', post.message);
    const data = await this.pb.collection('posts').create(this.formData);
    this.formData = new FormData();
    return data;
  }

  async getPosts() {
    try {
      const result = await this.pb.collection('posts').getFullList({
        sort: '-created',
      });
      console.log(result[0]['username']);
    } catch {
      console.log('Datenbankfehler');
    }


  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getPosts();
  }

}
