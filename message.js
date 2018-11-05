// Compares the heros current location 
// with the map and checks for any obstacles
// which may include visibility, tools,
// items, jewels, frupals, etc.
function message(hero_obj, map_tile){
    // This will return the message that will be 
    // updated as the hero moves around the map.
    return "You are currently walking and ... "
	+ xyEdgeMessage(hero_obj) + visibilityMessage(map_tile) + terrainMessage(map_tile)
	+ contentMessage(map_tile);

}


function xyEdgeMessage(hero_obj){
    //If hero is at the edge of the map
//    if(hero_obj.x == max || hero_obj.y == max || hero_obj.x == 0 || hero_obj.y == 0)
//	return " You are at an edge of the map! ";
//    else
	return " "
}


function visibilityMessage(map_tile){
    if(map_tile.isVisible == 0)
	return "It is difficult to see. ";
    else if(map_tile.isVisible == 1)
	return "The area you are at is visible. ";
    return " ";
}


function terrainMessage(map_tile){
    switch(map_tile.terrain){
         case 0:
             return "You are in a meadow. ";
         case 1:
             return "You are in the forest. ";
         case 2:
             return "There's some water! ";
         case 3:
             return "You bumped into a wall. ";
         case 4:
             return "There is a bog. ";
         case 5:
             return "You're in a swamp. ";
         default:
             return " ";
    }
    return " ";
}


// This function compares the content of
// the current map cell and returns a message.
// There will be more to add to this.
function contentMessage(map_tile){
    if(map_tile.content == "None")
	return " ";
    if(map_tile.content == "Tree")
	return "And there is a tree. ";
    if(map_tile.content == "Boulder")
	return "And there is a boulder. ";
    if(map_tile.content == "Power Bar")
	return "Yum, a power bar! ";
    if(map_tile.content == "Blackberry Bushes")
	return "And there is a blackberry bush. ";
    
    return " ";
}