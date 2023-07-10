function createElf(name, pet = "dwarf"){
    return{
        name,
        pet
    }
}

function shootArrow(elf){
    return "TWANG"
}

module.exports = {
    createElf,
    shootArrow
    // findBatLovers,
    // encounterDeliciousVictim,
    // inquirePlace
}