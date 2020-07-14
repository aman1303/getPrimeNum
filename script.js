function getPrime(a, b) {
    // a = document.getElementById('start').value;
    // b = document.getElementById('end').value;
    var e = a < 2 ? 2 : a
    var prime = true;
    var c = []; // composite numbers 
    var d = []; // prime numbers
    if (b > a) {
        for (let i = e; i < b + 1; i++) {
            var prime = true;
            for (let j = 2; j < i; j++) {
                if (i % j == 0) {
                    // console.log(i)
                    c.push(i);
                    prime = false;
                    // console.log(c)
                    // prime = false;
                    break
                }
            } if (prime) {
                d.push(i)
            }
        }
    } else if (!a || !b) {
        alert("Value Missing !!")
    }var value = document.getElementById("value").innerHTML = d;


    // value.innerHTML = "<p style='max-width:100%; height:auto;'>" + d + "</p>";
}

function getPrimeNum() {
    var num1 = parseInt(document.getElementById('start').value);
    // console.log(num1);
    var num2 = parseInt(document.getElementById('end').value);
    // console.log(num2);


    if (num1 > num2) {
        alert("Value Error")
    }
    getPrime(num1, num2);
    
}












// function getPrime(a,b){

//     var e = a<2 ? 2 : a

//     var prime = true;
//     var c = []; // composite numbers 
//     var d = []; // prime numbers
// //     if(a==1 || a==0){
//         for (let i = 2; i < b+1; i++) {
//             var prime = true;
//             for (let j = 2; j < i; j++) {
//                 if(i%j == 0){
//                     // console.log(i)
//                     c.push(i);
//                     prime = false;
//                     // console.log(c)
//                     // prime = false;
//                     break
//                 }   
//             }if (prime){
//                 d.push(i)
//             }
//         }
//     }else if(a>1) {
//         for (let i = a; i < b+1; i++) {
//             var prime = true;
//             for (let j = 2; j < i; j++) {
//                 if(i%j == 0){
//                     // console.log(i)
//                     c.push(i);
//                     prime = false;
//                     // console.log(c)
//                     // prime = false;
//                     break
//                 }   
//             }if (prime){
//                 d.push(i)
//             }
//         }
//     }else if(!a || !b){
//         alert("Value missinig");
//     }
//     document.getElementById('answer').innerHTML = d;
// }



//  =========================================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function yesNo(){
// var a  = [1,2,3,4,5]
// var b = [1,2,3]
// c = []
// for (let i = 0; i < a.length; i++) {
//     if(a[i] in b == false){
//        c.push(a[i])
//     } //else{
//     //     c.push(a[i])
//     // }    
// }console.log(c)
// }


// function yesNo(){
// var array1 = [1,2,3,4,5];
// var array2 = [1,2,3];

// var unique = array1.filter(obj => array2.indexOf(obj) == -1);
// console.log(unique);
// }

// function yesNo(){
//     var a = [1,2,3,4,5]
//     var b = [1,2,3]
//     same = false
//     var  unik = []
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if(a[i] == b[j]){
//                 same = false
//             }
//         }if(same){
//             console.log(a[i])
//         }        
//     } //console.log(same)
//     // console.log(unik)
// }



// function getPrime(a, b){
//     c = [] //all numbers
//     d = [] // composite numbers
//     e = [] // prime numbers
//     var prime = false
//     if(a>1){
//         for (let i = a; i < b+1; i++) {
//             // console.log(i);
//             for (let j = 2; j < i; j++) {
//                 if(i%j == 0){
//                     d.push(i)
//                     prime=false
//                     break
//                 }

//             } 
//         }
//     }for (let i = a; i < b+1; i++) {
//         c.push(i);
//     }
//     for (let i = 0; i < d.length; i++) {
//     if(d[i] in c == true){
//         // console.log("yes")
//     }else{
//         e.push(d[i])
//     }    
// }
// // console.log(c)
// // console.log(d)
// // console.log(e)
// }
