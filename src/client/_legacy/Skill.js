'use strict';

import Entity from './Entity.js';

export default class Skill extends Entity {

  constructor() {
    super();
    this.type = 'skill';
  }

  getXPCost(aptitudes) {
    // TODO: Calculate XP cost
  }

}