// Write your solution below:
const makeUnique = string => [...new Set(string)].join('');


let testWords =["helloworld", "iwanttoclimbamountain",'mississippi']

for(let i=0;i<testWords.length;i++){
    console.log(makeUnique(testWords[i]))
}