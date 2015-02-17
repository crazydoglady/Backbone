var Homework = Backbone.Collection.extend({
  location: $('.homework').append("This is a Collection called Homework."),
  model: Assignment,

});//end collection

var collection = new Homework(); //same setup as Object constructors
collection.models;


var Sheep = Backbone.Collection.extend({
  locaiton: $('.sheep').append("This is a Collection called Sheep."),
  model: Woolly,

});//end flock collection

var flock = new Sheep();
flock.models;

//example used in lecture:
// var Posts =Backbone.Collection.extend({ defines posts as collection
//   url: jhvhgv;
//   model: Post; //all model with this name will be added to this collection?
// });
//
// var collection = new Posts();
// collection.models
// //returns empty array
//
// collection.add(post1);
//   //adds post from models.js to the array(collection)
//
//   collection.fetch(); //use to add multiple posts //adds all of them, does not get specific ones
//   collection.models
