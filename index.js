// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
  return Math.abs(blockNumber - 42);
}
console.log(distanceFromHqInBlocks(30));

function distanceFromHqInFeet(pickUpLocation){
  const block = distanceFromHqInBlocks(pickUpLocation);
  const feet = block * 264;
  return feet;
}
console.log(distanceFromHqInFeet(30))

function distanceTravelledInFeet(start, destination){
  return (Math.abs(destination - start) * 264);
}
console.log(distanceTravelledInFeet(65, 60));