import { Template } from 'meteor/templating';

import './body.html';

Template.body.helpers({
  items: [
    { text: 'This is item 1' },
    { text: 'This is item 2' },
    { text: 'This is item 3' },
  ],
});
