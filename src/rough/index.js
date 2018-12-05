import GameState from 'states/GameState';

class RoughExample extends Phaser.Game {

  constructor() {
    super(800, 600, Phaser.AUTO, 'content', null);
    this.state.add('GameState', GameState, false);
    this.state.start('GameState');
  }
}

new RoughExample();
