import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private static _incrementCount = 0;
  private _energyType : EnergyType;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._incrementCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Ranger._incrementCount;
  }
}

export default Ranger;