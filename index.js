function theBeatlesPlay(musicians, instruments){
  var array = []
  
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  var counter = 0
  
  while(facts.length > 0){
    counter ++
    array.push(`${facts}!!!`)
  }
  return array
}

function iLoveTheBeatles(n){
  
}