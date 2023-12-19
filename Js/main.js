





                                                    //    sec1

// var  quotes = [
//  {mainQuote:"“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”"},
//  {mainQuote:"“Be mindful. Be grateful. Be positive. Be true. Be kind.”"},
//  {mainQuote:"“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”"},
//  {mainQuote:"“Life becomes easier and more beautiful when we can see the good in other people.”"},
//  {mainQuote:"“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”"},
// ];

// console.log(quotes.length);
// document.getElementById("main-quote").innerHTML=`<h5 class="text-white">`+ quotes[length] +`</h5>`








function getquote(){

var  quotes = [
"“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”",
"“Be mindful. Be grateful. Be positive. Be true. Be kind.”",
"“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.”",
"“Life becomes easier and more beautiful when we can see the good in other people.”",
"“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”",
];

// console.log(quotes.length);

viewQuote = quotes[Math.floor(Math.random()* quotes.length)];
    
document.getElementById("main-quote").innerHTML=`<h5 class="text-white">`+ viewQuote +`</h5>`

}
  
    



