import Race from './Race';

class Elf extends Race {
  private static _instancesCount = 0;
  constructor(name: string, dexterity: number, public maxLifePoints = 99) {
    super(name, dexterity);
    Elf._instancesCount += 1;
  }

  public static maxLifePoints(): number {
    return 99;
  }

  public static createdRacesInstances(): number {
    return Elf._instancesCount;
  }
}

export default Elf;