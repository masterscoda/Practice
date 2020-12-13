 /*
Author: Scott Bossard
Date: 12/12/2020
Description:
Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

    A word is defined as a character sequence consisting of non-space characters only.
    Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
    The input array words contains at least one word.

 

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]

*/
 
 function fullJustify(words, maxWidth) {
    var output = [];

    for (var i = 0; i < words.length; i = j) {
        let len = -1;
        //Add current length until words (with a space in between) reach max width
        for (var j = i; j < words.length && len + 1 + words[j].length <= maxWidth; j++) {
            len += 1 + words[j].length;  
        }

        let spaces = 1; // min space
        let extraSpace = 0;
        //When j != i + 1 we have reached a new line
        if (j !== i + 1 && j !== words.length) {
          spaces = (maxWidth - len) / (j - 1 - i) + 1; //spaces between words
          extraSpace = (maxWidth - len) % (j - 1 - i); //not even split of spaces we need a extra
        }

        
        let line = words[i];
        //Build the actual line. 
        for (let k = i + 1; k < j; k++, extraSpace--) {
          line += ' '.repeat(spaces + (extraSpace > 0 ? 1 : 0)) + words[k];
        }
        line += ' '.repeat(maxWidth - line.length);

        output.push(line); //push built line
      }

  return output;
}

fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16);