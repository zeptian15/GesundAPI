'use strict';

module.exports = (app) => {
    // Kumpulan Controller
    var home = require('../controllers/HomeController');
    var foods = require('../controllers/FoodController');
    var sports = require('../controllers/SportController');
    var diseases = require('../controllers/DiseaseController');
    var diets = require('../controllers/DietController');
    var tips = require('../controllers/TipsController');
    var random = require('../controllers/RandomRecomendation');

    // Halaman Home
    app.route('/')
        .get(home.index);

    // Food 
    app.route('/foods')
        .get(foods.foods);

    app.route('/foods/:food_id')
        .get(foods.findFoods);

    // Sport
    app.route('/sports')
        .get(sports.sports);

    app.route('/sports/:sport_id')
        .get(sports.findSports);


    // Diseases
    app.route('/diseases')
        .get(diseases.diseases);

    app.route('/diseases/:diseases_id')
        .get(diseases.findDiseases);


    // Diet
    app.route('/diets')
        .get(diets.diets);

    app.route('/diets/:diet_id')
        .get(diets.findDiets);


    // Tips
    app.route('/tips')
        .get(tips.tips);

    // Random Recomendation
    app.route('/random/foods')
        .get(random.getRandomRecomendationMakanan);

    app.route('/random/diets')
        .get(random.getRandomRecomendationDiet);

    app.route('/random/sports')
        .get(random.getRandomRecomendationOlahraga);

};