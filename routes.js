'use strict';

module.exports = (app) => {
    // Controller
    var users = require('./controller/UsersController');
    var foods = require('./controller/FoodController');
    var sports = require('./controller/SportController');
    var diseases = require('./controller/DiseaseController');
    var diets = require('./controller/DietController');

    // Users
    app.route('/')
        .get(users.index);

    app.route('/users')
        .get(users.users);

    app.route('/users/:user_id')
        .get(users.findUsers);

    app.route('/users')
        .post(users.createUsers);

    app.route('/users')
        .put(users.updateUsers);

    app.route('/users')
        .delete(users.deleteUsers);

    // Food 
    app.route('/foods')
        .get(foods.foods);

    app.route('/foods/:food_id')
        .get(foods.findFoods);
    
    app.route('/foods')
        .post(foods.createFoods);

    app.route('/foods')
        .put(foods.updateFoods);
    
    app.route('/foods')
        .delete(foods.deleteFoods);

    // Sport
    app.route('/sports')
        .get(sports.sports);

    app.route('/sports/:sport_id')
        .get(sports.findSports);

    app.route('/sports')
        .post(sports.createSports);

    app.route('/sports')
        .put(sports.updateSports);

    app.route('/sports')
        .delete(sports.deleteSports);

    // Diseases
    app.route('/diseases')
        .get(diseases.diseases);

    app.route('/diseases/:diseases_id')
        .get(diseases.findDiseases);

    app.route('/diseases')
        .post(diseases.createDiseases);

    app.route('/diseases')
        .put(diseases.updateDiseases);

    app.route('/diseases')
        .delete(diseases.deleteDiseases);

    // Diet
    app.route('/diets')
    .get(diets.diets);

    app.route('/diets/:diet_id')
    .get(diets.findDiets);

    app.route('/diets')
    .post(diets.createDiets);

    app.route('/diets')
    .put(diets.updateDiets);

    app.route('/diets')
    .delete(diets.deleteDiets);
    
};