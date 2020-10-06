//Ransom Note
function ransomNote(magazine, note, m, n) {
    if (note.length > magazine.length){
        console.log("No");
    }
    var obj = {};
    //Put # of words in the object
    for (var i =0; i < m; i++) {
        if (obj[magazine[i]]) {
            obj[magazine[i]] += 1;
        } else {
            obj[magazine[i]] = 1;
        }
    }
    for (var j =0; j < n; j++) {
        if (obj[note[j]]) {
            //word in both arrays
            obj[note[j]] --;
        } else if (obj[note[j]] < 1) {
            //check for dup word
            //console.log(obj);
            console.log("No");
        //return false;
        } else {
            //word is not there
            //console.log(obj);
            console.log("No")
           //return false;
        }
        
    }
    //console.log(obj);
    console.log("Yes"); 
    //return true;
}

var magazine = Array('give', 'me', 'one', 'grand', 'today', 'night');
var note = Array('give', 'one', 'grand', 'today');
ransomNote(magazine, note, 6, 4);


//Two Strings
//Given two strings, determine if they share a common substring. A substring may be as small as one character.
//For example, the words "a", "and", "art" share the common substring. The words "be" and "cat" do not share a substring. 
function twoStrings(s1, s2) {
    var word1 = s1.split('');
    var word2 = s2.split('');
    var output = "No";
    for(let i = 0; i < word1.length; i++){
        if(word2.includes(word1[i])){
            output = 'Yes';
        }
    }
    console.log(output);
}

twoStrings("hello", "world");
twoStrings("hi", 'world');
