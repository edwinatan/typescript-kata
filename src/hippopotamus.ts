// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son poids n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Animal from './animal.class';
import Food from './food/food';

export default class Hippopotamus implements Animal {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  eat(food: Food): string | void {
    if (!food.isVegan()) {
      return 'beurk';
    } else {
      this.weight += 20;
    }
  }

  sleep(): void {
    if (this.weight >= 20) {
      this.weight -= 20;
    } else {
      this.weight = 0;
    }
  }

  swim(): void {
    if (this.weight >= 50) {
      this.weight -= 50;
    } else {
      this.weight = 0;
    }
  }
}
