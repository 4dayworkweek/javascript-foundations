var assert = require('chai').assert;
var {createElf, shootArrow} = require('../exercises/elf')

describe('Elf', function() {

   it('should create an elf', function(){ 
    var elf = createElf("Arya");

    assert.equal(elf.name, "Arya");
    });

    it('should have a pet dwarf by default', function() {
        var elf = createElf("Legolas");

        assert.equal(elf.name, "Legolas");
        assert.equal(elf.pet, "dwarf");
    })

    it('should be able to shoot an arrow', function() {
        var elf = createElf("Legolas");

        assert.equal(shootArrow(elf), "TWANG");
    })
});