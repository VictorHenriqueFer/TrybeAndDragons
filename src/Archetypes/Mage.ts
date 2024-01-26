import Archetypes from './Archetypes';
import { EnergyType } from '../Energy';

class Mage extends Archetypes {
  private static _incrementeCounts = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._incrementeCounts += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage._incrementeCounts;
  }
}

export default Mage;