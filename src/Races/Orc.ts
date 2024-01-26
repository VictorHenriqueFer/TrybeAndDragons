import Race from './Race';

class Orc extends Race {
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 74) {
    super(name, dexterity);
    Orc._instancesCount += 1;
  }

  public static maxLifePoints(): number {
    return 74;
  }

  public static createdRacesInstances(): number {
    return Orc._instancesCount;
  }
}
export default Orc;