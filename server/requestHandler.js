import _ from 'lodash';

const carOfTheWeek = require('./data/carOfTheWeek');
const makes = require('./data/makes');
const models = require('./data/models');

export function getCarOftheWeek () {
  let model = getItemById(models, carOfTheWeek.modelId);  
  let responseData = model;
  responseData.review = carOfTheWeek.review;
  responseData.make = getItemById(makes, model.makeId).name;
  return responseData;
}

export function getItemById(items, id) {
  return  _.find(items, (item) => { 
    return item.id === id; 
  });
}    