const final=()=> {
    return(
    let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    names.map((name,ind)=>(
    let firstLetter=name.chartAt(0).toLowerCase();
     firstLetter==="j"?byeSpeaker.speak(name):helloSpeaker.speak(name);
    ))
    )}

final();
    
//     for (var i = 0; i < names.length; i++) {
    
//       var firstLetter = names[i].charAt(0).toLowerCase();
//       if (firstLetter === 'j') {
//         byeSpeaker.speak(names[i]);
//       } 
//       else {
//         helloSpeaker.speak(names[i]);
//       }
//     }
    
