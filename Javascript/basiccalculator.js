/*
Author: Scott Bossard
Date: 12/6/2020
Description:
Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

Input: "1 + 1"
Output: 2

Example 2:

Input: " 2-1 + 2 "
Output: 3

Example 3:

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/

function evaluateExpr(stack) {
    var res = 0;

    if (stack && stack.length > 0) {
        res = stack.pop();
    }

    // Evaluate the expression till we get corresponding ')'
    while (stack && stack.length > 0 && (stack[stack.length -1 ] != ')')) {
        var sign = stack.pop();
        
        if (sign == '+') {
            res += Number(stack.pop());
        } 
        else {
            res -= Number(stack.pop());
        }
    }
    return res;
}

function calculate(s) {
    var operand = 0;
    var n = 0;
    var stack = [];

    /*
       Iterate the expression string in reverse order one character at a time. Since we are reading          the expression character by character, we need to be careful when we are reading digits and            non-digits.
    */
    for (var i = s.length - 1; i >= 0; i--) {
        if(parseInt(s[i]) || parseInt(s[i]) == 0){
            /*
            The operands could be formed by multiple characters. A string "123" would mean a numeric                123, which could be formed as: 123 >> 120 + 3 >> 100 + 20 + 3. Thus, if the character                  read is a digit we need to form the operand by multiplying a power of 10 to the current                digit and adding it to the overall operand. We do this since we are processing the string              in the reverse order.
            */
            operand = Math.pow(10, n) * s[i] + operand;
            console.log(operand);
            n += 1;
        }
        else{
            if(s[i] != " ") {
                
                if (n != 0) {
                    /*
                    The operands could be formed by multiple characters. We need to keep track of an                        on-going operand. This part is a bit tricky since in this case the string is                          reversed. Once we encounter a character which is not a digit, we push the operand                      onto the stack.
                    */
                    stack.push(operand);
                    n = 0;
                    operand = 0;
                }
                
                if (s[i] == '(') {
                    /*
                    When we encounter an opening parenthesis (, this means an expression just ended.                        Recall we have reversed the expression. So an opening bracket would signify the                        end of the an expression. This calls for evaluation of the expression by popping                      operands and operators off the stack till we pop corresponding closing                                parenthesis. The final result of the expression is pushed back onto the stack.
                    
                    Note: We are evaluating all the sub-expressions within the main expression
                    */
                    var res = evaluateExpr(stack);
                    stack.pop();
                    stack.push(res);

                } 
                else {
                    //Push the other non-digits onto to the stack.
                    stack.push(s[i]);
                }
            }
            else{
                continue; //If we got a space, just continue right along
            }
        }
        
    }
    
    if (n != 0) {
        stack.push(operand); //Push the last operand to stack
    }

    return evaluateExpr(stack);
}


calculate("(1+(4+5+2)-3)+(6+8)");