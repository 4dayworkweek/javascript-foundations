
function createHobbit(name = "unknown", age = 0, isAdult = false, isOld = false, acquaintances = []){
  return{
    name,
    age,
    isAdult,
    isOld,
    acquaintances
  }
}

function celebrateBirthday(hobbit){
  hobbit.age += 1
  if(hobbit.age >= 33 && hobbit.age < 101){
    hobbit.isAdult = true
    hobbit.isOld = false
  } else if(hobbit.age >= 101){
    hobbit.isAdult = true
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit){
  if(hobbit.name == "Frodo"){
    return "Here is the ring!"
  }else{
    return 'You can\'t have it!'
  }
}

function meetPeople(hobbit, people = []){
  people.forEach(function(person, index){
    hobbit.acquaintances.push(person)
  })
  return hobbit
}

function findFriends(hobbit){
  var friends = []
  hobbit.acquaintances.forEach(function(person, index){
    if(person.relationship == "friend"){
      friends.push(person.name)
    }
  })
  return friends
}

module.exports = {
  createHobbit,
  celebrateBirthday,
  getRing,
  meetPeople,
  findFriends
}