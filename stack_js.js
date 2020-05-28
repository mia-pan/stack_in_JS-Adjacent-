(function main() {
    function findDuplicates(input) {
        var  stackArray = [];
        
        stackArray.push(input[0]);
        
        for(var i=1; i < input.length; i++) {
            if (stackArray[input.length-1] === input[i]) {
                stackArray.pop();
            } else {
                stackArray.push(input[i])
            }
        }
        
        return stackArray.toString();
    }
    
    findDuplicates(S);
}());


/*
class Solution {
    public String removeDuplicates(String S) {
        //loop through the string
        //take the first letter we're looking at
        //push it into our stack
        
        //loop:
        //second letter: compare that to the top of the stack (if they match they're adjacent)
        //if so, pop the stack
        
        //if doesn't match push
        
        //turn our stack into string
        //return string
    }
}

*/
