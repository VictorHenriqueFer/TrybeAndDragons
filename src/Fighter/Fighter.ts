import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

export interface Fighter extends SimpleFighter {
  lifePoints: number,
  strength: number,
  defense: number,
  energy?: Energy

  attack(enemy: Fighter | SimpleFighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number) : number;
}