export class Destination {

  public location: string;
  public note: string;
  public visited: boolean;

  constructor(location: string, note: string) {
    this.location = location;
    this.note = note;
    this.visited = false;
  }

}
