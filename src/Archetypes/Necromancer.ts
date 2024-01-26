import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private static _incrementeCounts = 0;
  private _energyType: EnergyType;

  constructor(name:string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._incrementeCounts += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer._incrementeCounts;
  }
}

export default Necromancer;