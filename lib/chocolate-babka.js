 
function counterCreator(number) {
    return function(){
        number++
      return number ;
    } ;
}

function countAnnouncer(phrase, callback){
  return function(){
    return 'Now serving '+ phrase + ' number ' + callback() + '!';
  }
}