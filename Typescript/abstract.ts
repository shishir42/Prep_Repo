abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {}

  abstract getSepia(): void;
  getReelTime (): number{
    return 2;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burstMode: number
  ) {
    super(cameraMode, filter, burstMode);
  }
  getSepia(): void {
    throw new Error("Method not implemented.");
  }

  getReelTime(): number {
      return 4;
  }
}

const ph = new Instagram("test", "test", 1);
