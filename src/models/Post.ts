export class Post {
  title: string;
  username: string;
  message: string;

  constructor(title: string, username: string, message: string) {
    this.title = title;
    this.username = username;
    this.message = message;
  }
}
