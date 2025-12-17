// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
  return Math.abs(blockNumber - 42);
}
console.log(distanceFromHqInBlocks(30));

function distanceFromHqInBlocks(street){
    const hqStreet = 42;
    return Math.abs(street - hqStreet);
}



function distanceFromHqInFeet(pickUpLocation){
  const block = distanceFromHqInBlocks(pickUpLocation);
  const feet = block * 264;
  return feet;
}
console.log(distanceFromHqInFeet(30))

function distanceFromHqInFeet(street){
    const hqStreet = 42;
    const feet = 264;
    return Math.abs((street - hqStreet) * feet);
}



function distanceTravelledInFeet(start, destination){
  return (Math.abs(destination - start) * 264);
}
console.log(distanceTravelledInFeet(65, 60));

function distanceTravelledInFeet(destination, start){
    const feet = 264;
    return Math.abs((destination - start) * feet);
}



function calculatesFarePrice(startBlock, destinationBlock){
  let distance = distanceTravelledInFeet(startBlock, destinationBlock);
  if(distance <= 400){
    return 0
  }else if(distance > 400 && distance <= 2000){
    return (distance - 400) * 0.02
  }else if (distance > 2000 && distance < 2500){
    return 25
  }else{
    return "cannot travel that far"
  }
}
console.log(calculatesFarePrice(34, 38))

function calculatesFarePrice(start, destination){
    const feet = 264;
    const Distance = Math.abs((destination - start) * feet);
    
    if (Distance > 2500) {
        return "cannot travel that far";
      } 
      else if (Distance > 2000) {
        return 25;
      } 
      else if (Distance > 400) {
        return (Distance - 400) * 0.02;
      }
       else {
        return 0;
      }    
}