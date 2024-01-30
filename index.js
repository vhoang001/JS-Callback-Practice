const inventory = newInventory()
move(inventory).to(0, 0)


// const character = newImage('assets/green-character/static.gif')
// move(character).withArrowKeys(100, 250) 

const tree = newImage('assets/tree.png')
move(tree).withArrowKeys(200, 450)

 const character = newImage('assets/green-character/static.gif')

move(character).withArrowKeys(100, 250, handleDirectionChange) // move function to move the character using arrow key
function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    } else if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    } else if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    } else if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    } else if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    } else {
        return
    }
}

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
