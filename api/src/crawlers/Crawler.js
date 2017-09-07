class Crawler {
  constructor() {
    if(typeof(this.crawl) !== Function) {
      throw new TypeError("Must override function: crawl");
    }
  }
}