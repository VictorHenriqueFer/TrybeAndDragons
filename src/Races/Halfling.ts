import Race from './Race';

class Helfling extends Race {
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 60) {
    super(name, dexterity);
    Helfling._instancesCount += 1;
  }

  public static maxLifePoints(): number {
    return 60;
  }

  public static createdRacesInstances(): number {
    return Helfling._instancesCount;
  }
}
export default Helfling;