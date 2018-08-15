export interface IPost {

  title: string;
  content: string;
  likes: number;
  dislikes: number;
  created_at: Date;
  time: number;

}

export class Post implements IPost {

  public likes: number;
  public dislikes: number;
  public created_at: Date;
  public time: number;

  constructor(
    public title: string,
    public content: string,
  ) {
    this.likes = 0;
    this.dislikes = 0;
    this.created_at = new Date();
    this.time = this.created_at.getTime();
  }

}
