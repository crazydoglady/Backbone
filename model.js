

var Assignment = Backbone.Model.extend({

  defaults: {
    location: $('article').append('default text'),
    text: 'somethingawesome',
    photo: 'http://www.pipnet.com/eggs/koolaid-large.jpg'
      //attr here are like those of constructor. additional ones can be added, but these will be given to all if nothing else is provided.
  },
  initialize: function() {
    console.log("new assignment model is created");
  }
});//end of model

var assign1 = new Assignment({ title: 'backbone is', animal: 'Monkeys have backbones'});
// assign1.save(); //posts to server if url provided
// assign1.set({title: 'backbone might be interesting'}); //edits title if already saved
// assign1.save(); //PUT to server....if it has already been saved.

var Woolly = Backbone.Model.extend ({
  defaults: {
    photo: 'https://www.openclipart.org/image/300px/svg_to_png/17637/lemmling-Cartoon-sheep.png'
  },
  initialize: function() {
    console.log("new sheep created?");
  }
});//end of model

var suffolk = new Woolly({ fleece: 'white', color: 'black', use: 'meat', photo: 'http://upload.wikimedia.org/wikipedia/commons/3/3d/Take_ours!.jpg'});
var lamb = new Woolly({ size: 'small', color: 'white'});


//example from class:
// //this is a  backbone model
// var Post = Backbone.Model.extend({
//   urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bbjan5.' //this is url where info will be stored and allows backbone to use GET PUT DELETE POST on our behalf
//   idAttribute: " _id",
//   defaults: {//will assign thes attributes to all instances?
//     photo: 'http://www.fillmurray.com/100/100'
//   },
//   initialize: function() {
//     console.log("post model is created"); //all backbone has an initialize function
//   }
// });
