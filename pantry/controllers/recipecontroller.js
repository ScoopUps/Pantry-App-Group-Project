const Recipe = require('../models/recipe');

//create object for recipe controller
const recipeController = {};

//controller to find all recipes from database
recipeController.index = (req,res) => {
  Recipe.findAll()
    .then(recipes => {
      res.json({
        message: 'ok',
        data: {recipes},
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400', err
      });
});
};

//controller to return a single recipe
recipeController.show = (req,res) => {
  Recipe.findById(req.params.id)
    .then(item => {
      res.json({
        message: 'ok',
        data: {recipe},
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400', err
      });
    });
  };

//controller to create a single recipe
recipeController.create = (req,res) => {
  Recipe.create({
    // name: req.body
    // url:
    // img:
  })
    .then(recipe => {
      res.json({
        message: 'ok',
        data: {recipe},
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({
        message: '400', err
      });
    });
  };

module.exports = recipeController;