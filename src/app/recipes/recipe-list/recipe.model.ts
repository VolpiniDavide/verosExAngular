export class Recipe {

  public name: String;
  public description: String;
  public imagePath: String;
  public liked: boolean;

  constructor(name: String, desc: String, imgP: String, liked: boolean= false) {

      this.name = name;
      this.description = desc;
      this.imagePath = imgP;
      this.liked = liked;

  }


}
