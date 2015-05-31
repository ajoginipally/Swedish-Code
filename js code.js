function consanant(letter) {
    if( letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' ) {
        return false;
    }
    else {
        return true;
    }
}

function result(){
     document.getElementById('demo').innerHTML = str();
}

function gen(word) {
    var empty = "";
    for(i=0; i<word.length; i++) {
        if(consanant(word.charAt(i)) == true) {
            if( word.charAt(i) == (word.charAt(i)).toUpperCase()) {
                empty = empty + (word.charAt(i) + 'o' + (word.charAt(i)).toLowerCase());
            }
            else {
            empty = empty + (word.charAt(i) + 'o' + word.charAt(i));
            }
        }
        else {
            empty = empty + (word.charAt(i)); 
        }
    }
    return empty;
}

function str() {
    return gen(document.getElementById('code').value);
}
                                                           
console.log(gen('Tom'));