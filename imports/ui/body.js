import { Template } from 'meteor/templating';
import { Items } from '../api/items.js';

import './item.js'
import './body.html';


Template.body.helpers({
  items() {
    return Items.find({}, { sort: { createdAt: -1 } });
  },
  calcScore() {
    var count = 0;
    var allItems = Items.find().fetch();
    for (var i=0; i < allItems.length; i++){
      count += parseInt(allItems[i].points);
    }
    return count;
  },
});

Template.body.events({
  'submit .new-item'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;
    const points = target.number.value;

    //console.log(target)
    Items.insert({
      text,
      points,
      createdAt: new Date(),
    });

    target.text.value = '';
  },
});
