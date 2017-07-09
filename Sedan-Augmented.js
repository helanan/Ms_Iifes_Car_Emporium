var Sedan = (function(newSedan){
	var max_occupancy = 8;
	var current_occupancyOne = 4;
	var current_occupancyTwo = 3;
	var current_occupancyThree = 6;
	var current_occupancyFour = 2;
	var current_occupancyFive = 4;
	var current_occupancySix = 4;

	newSedan.getOccupancyOne = function(){
		return current_occupancyOne;
	};

	newSedan.getOccupancyTwo = function(){
		return current_occupancyTwo;
	};

	newSedan.getOccupancyThree = function(){
		return current_occupancyThree;
	};

	newSedan.getOccupancyFour = function(){
		return current_occupancyFour;
	};

	newSedan.getOccupancyFive = function(){
		return current_occupancyFive;
	};

	newSedan.getOccupancySix = function(){
		return current_occupancySix;
	};

	newSedan.setOccupancyOne = function(occupancy){
		if(occupancy <= max_occupancy){
			current_occupancyOne = occupancy;
		} else {
			throw "Cannot exceed maximum occupancy of" + max_occupancy;
		}
	};

	newSedan.setOccupancyTwo = function(occupancy){
		if(occupancy <= max_occupancy){
			current_occupancyTwo = occupancy;
		} else {
			throw "Cannot exceed maximum occupancy of" + max_occupancy;
		}
	};

	newSedan.setOccupancyThree = function(occupancy){
		if(occupancy <= max_occupancy){
			current_occupancyThree = occupancy;
		} else {
			throw "Cannot exceed maximum occupancy of" + max_occupancy;
		}
	};

	newSedan.setOccupancyFour = function(occupancy){
		if(occupancy <= max_occupancy){
			current_occupancyFour = occupancy;
		} else {
			throw "Cannot exceed maximum occupancy of" + max_occupancy;
		}
	};

	newSedan.setOccupancyFive = function(occupancy){
		if(occupancy <= max_occupancy){
			current_occupancyFive = occupancy;
		} else {
			throw "Cannot exceed maximum occupancy of" + max_occupancy;
		}
	};

	newSedan.setOccupancySix = function(occupancy){
		if(occupancy <= max_occupancy){
			current_occupancySix = occupancy;
		} else {
			throw "Cannot exceed maximum occupancy of" + max_occupancy;
		}
	};

	newSedan.getTypeOne = function(){
		return "Porsche Boxter";
	};

	newSedan.getTypeTwo = function(){
		return "BMW Sedan";
	};

	newSedan.getTypeThree = function(){
		return "Volvo Hatchback";
	};

	newSedan.getTypeFour = function(){
		return "Acura Sedan";
	};

	newSedan.getTypeFive = function(){
		return "Acura Sedan";
	};

	newSedan.getTypeSix = function(){
		return "Acura Sedan";
	};

	newSedan.getColorOne = function(){
		return "Blue";
	};

	newSedan.getColorTwo = function(){
		return "Red";
	};

	newSedan.getColorThree = function(){
		return "Green";
	};

	newSedan.getColorFour = function(){
		return "Orange";
	};

	newSedan.getColorFive = function(){
		return "Grey";
	};

	newSedan.getColorSix = function(){
		return "Yellow";
	};

	
	return newSedan;

})(Sedan || {});