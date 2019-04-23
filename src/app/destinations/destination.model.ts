export class Destination {

  location: string;
  note: string;
  visited: boolean;

  constructor(location: string, note: string) {
    this.location = location;
    this.note = note;
    this.visited = false;
  }

}
