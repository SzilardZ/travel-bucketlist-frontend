export class Destination {

  public destinationId: number;
  public location: string;
  public note: string;
  public visited: boolean;
  public visitedFrom: Date;
  public visitedUntil: Date;

  constructor(location: string, note: string) {
    this.location = location;
    this.note = note;

  }

}
