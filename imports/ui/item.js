import { Template } from 'meteor/templating';

import { Items } from '../api/items.js';

import './item.html';

Template.item.events({
  'click .delete'() {
    Items.remove(this._id);
  },
});
