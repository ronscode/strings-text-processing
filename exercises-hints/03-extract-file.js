/* Write a function that receives a single string - the path to a file (the '​\​' character is escaped)
Your task is to subtract the ​file name​ and its ​extension​. (Beware of files like​ template.bak.pptx, ​as​ template.bak should be the file name, while​ pptx ​is the extension).

1. This one is in the slides! 
2. Find the "lastIndexOf()" the \\ from the input and assign it to a variable. 
3. Everything in the string past that is the file name and everything past the last period is the extension. 
4. Create a new variable and use the substr() method to slice off the end. 
5. Find the lastIndexOf() of the . 
6. Again split the string into two new variables using substr() based on the index of the last period. You should now have two variables one for file ext and one for file name! 
7. Log them to the console and adjust if needed! 

*/
