export class Destination {

  public destinationId: number;
  public location: string;
  public note: string;
  public visited: boolean;
  public visitedFrom: string;
  public visitedUntil: string;

  constructor(location: string, note: string) {
    this.location = location;
    this.note = note;

  }

}
