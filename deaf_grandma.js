function deafGrandma(){	
    let byes = 0;
    while (byes < 2){
      let input = window.prompt('HEY KID!');
        if (input == ''){	
            window.alert('WHAT?!');
        } else if (input !== input.toUpperCase()){	
            window.alert('SPEAK UP, KID!');
        } else if (input === input.toUpperCase() && input !== 'GOODBYE!'){	
            window.alert('NO, NOT SINCE 1946!');  
        } else if (input === 'GOODBYE!' && byes < 1){	
            window.alert('LEAVING SO SOON?');	
            byes++;  
        } else if (input === 'GOODBYE!'){	
            window.alert('LATER, SKATER!');	
            break;
        }
    }
}
  
deafGrandma();