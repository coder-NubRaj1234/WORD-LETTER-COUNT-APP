//select some element...........
let  textArea = document.querySelector("#text");
let  diplayWords = document.querySelector("#words");
let  displayLetters = document.querySelector("#letters");
let  AlphaCount = document.querySelector("#AlphaCount");
let  displayNumner = document.querySelector("#displayNumner");


let wordCount = (str) =>{
    let textArray = str.trim().split(/\s+/g);
    if(textArray == ""){
        return 0;
    };
    return textArray.length;
};

function ckeckCounter(s){
    let letters = "";
    let number = "";
    let alphaCount = "";
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] != " " && s[i] != "\n"){
            letters++;
            if(s[i] >= "a" && s[i] <= "z" || s[i] >= "A" && s[i] <= "Z"){
                alphaCount++;
            }
            if(s[i] >= 0 && s[i] <= 9){
                number++;
            };
        };
    };  
    displayLetters.innerText = letters;
    AlphaCount.innerText = alphaCount;
    displayNumner.innerText =  number;
};

textArea.addEventListener("keyup" , () =>{
    let  text = textArea.value;
    ckeckCounter(text);
    let  word = wordCount(text);
    diplayWords.innerText =  word
});
