// I put this in, otherwise i get error: "Invalid Response: ReferenceError: Buffer is not defined"
global.Buffer = global.Buffer || require("buffer").Buffer;


import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import IOTA from "iota.lib.js";

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  this.counter = new ReactiveVar(0);

  var defaultNode = "https://node.tangle.works";
  var otherNode = "http://iota.bitfinex.com:80";

  var iota = new IOTA({
    provider: defaultNode,
    sandbox: false
});

  if (iota) {
     console.log(iota)
     console.log(iota.api)

     iota.api.getNodeInfo(function (error, success) {
        if ('1111', error) {
           console.error(error);
        } else {
           console.log('2222', success);
        }
     })
  }



});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
