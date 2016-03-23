import Ember from 'ember';
import MemoryLeak from '../models/memory-leak'

export default Ember.Component.extend({

  init() {
    this._super();
    this.leak = new MemoryLeak(`This is the memory leak of component ${this.get('elementId')}`);
  }

});
