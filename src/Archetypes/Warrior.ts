import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private static _incrementCount = 0;
  private _energyType : EnergyType;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._incrementCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._incrementCount;
  }
}

export default Warrior;