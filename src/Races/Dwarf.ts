import Race from './Race';

class Dwarf extends Race {
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 80) {
    super(name, dexterity);
    Dwarf._instancesCount += 1;
  }

  public static maxLifePoints(): number {
    return 80;
  }

  public static createdRacesInstances(): number {
    return Dwarf._instancesCount;
  }
}
export default Dwarf;