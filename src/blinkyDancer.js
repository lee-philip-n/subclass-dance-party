var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this); 
  this.$node.fadeToggle(1000);
};

MakeBlinkyDancer.prototype.lineUp = function() {
  MakeDancer.prototype.setPosition.call(this, 1, 1);
};