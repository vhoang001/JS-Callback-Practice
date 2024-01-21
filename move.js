function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null                        //track direction change
        let x = 100                                 // track character current x position
        let y = 250                                 // track character current y position
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'

        function moveCharacter(){
            /*
           * Define the directions and update the character's position
           * Param: None 
           * Return: None 
            */
           if (direction === "west") {             //Move left
                x -= 1 
           } else if (direction === "east") {      //Move right
                x += 1
           } else if (direction === "north") {     //Move up
                y += 1
           } else if (direction === "south") {     //Move down
                y -= 1
           } else if (direction === null) {     //Move down
                return
            } else {
                console.log("Error input")
           }
           element.style.left = x + 'px'         //Update character left position
           element.style.bottom = y + 'px'       //Update character bottom position
       }
       
       setInterval(moveCharacter, 1)               //Specified interval to call moveCharacter function every 1 millisecond 
       
       document.addEventListener('keydown', function(e){   //Event listener when the key press and interpret the arrow keys to directions
           if (e.key === "ArrowRight") { 
               direction = "east"
           } else if (e.key === "ArrowLeft") {
               direction = "west"
           } else if (e.key === "ArrowDown") {
               direction = "south"
           } else if (e.key === "ArrowUp") {
               direction = "north"
           } else if (e.repeat) {
               return
           } else {
               console.log('Error Key Inputted')
           }
           callback(direction)
       })
       
       document.addEventListener('keyup', function(e){     //Event listener to stop the character when the user releases a key
           direction = null
           callback(direction)
       })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}