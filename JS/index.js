// alert("welcome to my world dear");
// let name="925215";
// console.log(typeof(name));
// let user="emeke";
// alert("good morning" + user);
// let his="Mr Mathew";
// //document.write("good"+ " " + "morning" + " " + " "  + his)

// let nm="mathew onaja";
// alert("hello"+nm);
// alert(nm+""+"you are on the way to learnfactory");
// let myPeople="Shalom bernardine Aoe and Grace";
// document.write(typeof(myPeople)+" "+myPeople);

// let num=24;
// console.log(typeof(num));
// let tostrin=String(num);
// console.log(typeof(tostrin);
// )

// let string="sun" +" moon";
// let size='how'
// document.write(string + size +"<br>");
// let d=3;
// console.log(d--);

//let count=0;
//let username="blank";





// using if statment
// let corect = "good";
// let wrong = "failed";
// let name = prompt("pls put your name to verify again");
// if (name !== username) {
//     alert(wrong);
//     count++;
//     if (count < 3) {
//         let name = prompt("pls put your name to verify again");
//         if (name !== username) {
//             alert(wrong);
//             count++;
//             if (count < 3) {
//                 let name = prompt("pls put your name to verify again");
//                 if (name !== username) {
//                     alert(wrong);
//                     count++;
//                     let name = prompt("pls put your name to verify again");
//                     if (count < 3) {
//                         if (name !== username) {
//                             alert(wrong);
//                         } else {
//                             alert(corect);
//                             alert("you entered " + count + "times");
//                         }
//                     } else {
//                         alert(corect);
//                     }
//                 }
//             } else {
//                 alert(corect);
//             }
//         }
//     } else {
//         alert("perfect");
//     }

    //let y="mat";
    //let z=(y==="mat") ? 22: 12;
    //alert(z)
    //let p=prompt("is permission grantede");
    //let age=18;
    //let c=prompt("what is the childs age");
    //if(c >= age && p!==true){
    //    alert("permission denied");
    //    
    //}else if(c<age && p==true){
    //    alert("deniedd");
    //}
    //else if(c>=age && p==true){
    //    alert("granted");
    //}
    //else{
    //    alert("permisson denied");
    //}

    //let access;
    //let no="you do not have a parental access";
    //let yes="you have a parental access";
    //let age = prompt("what is the childs age");
    //let permission = prompt ("is he allowed")
    // age >= 18 || permission ==="true"  ?  alert(yes):  alert(no)
    //;

    //alert(undefined && 0 && undefined);i=
    //let i=10;
    //while(i<11){
    //    alert("i==");
    //    i++
    //}



    //let i=12;
    //do{
    //    alert("hello this is a while loop");
    //} while(i < 20){
    //    alert("nop" + i);console.log(i);
    //    i++;
    //}



    //let weekDays=["mon", "thues", "wed", "thurs", "fri", "sat"];
    //for(let i=0; i<weekDays.length; i++){
    //    let eachDay=weekDays[i];
    //    console.log(eachDay);
    //    document.write(eachDay);
    //}

    // let one = 1;
    // let two  = 2;
    // let thre  = 3;
    // let four  = 4;
    // let five  = 5;
    // let six = 6;
    // let seven  = 7;
    // let eight  = 8;
    // let nine  = 9;
    // let zero  = 0;
    // let number=prompt("enter a number");
    // // if(number=="11" && number.length==2){
    // //     alert("eleven");

    // // }else{
    // //     alert("you entered"+number);
    // // }

    // for(i=number; i=number; i){
    //     for(p=number.length; )
    // }





    //A program tocheckif an acc is active 
    let number = prompt("input your account number");
    let active = prompt("is your account active" + " " + "\"yes or no\"");
    let result = (number == "2019" && active == "yes") ? alert("your balance is 20") : alert("in correct account detail");




    //A program tocheck if your acc no is active
    if (prompt("input your password") == "2019") {
        alert("correct password number");
        if (prompt("input active account code") == "0012") {
            alert("you have been transfered a some of 20,000,000,000");
            alert("Miss Bernar, thank you for beleving us");
        } else {
            alert("you dont have an active account");
        }

    } else {
        alert("incorrect password");

    }




    //To know the number of musicians
    let number = prompt("how many musicians are there");
    if (number === "0") {
        alert("not a group");
    }
    else if (number === "1") {
        alert("solo");
    }
    else if (number == "2") {
        alert("deux");
    }
    else if (number == "3") {
        alert("trio");
    }
    else if (number == "4") {
        alert("quartet");
    }
    else if (number > 4) {
        alert("the number is too large");
    }
    else {
        alert("what you entered" + " " + number + " " + "is not a number");
    }




    //To know if a number is even or odd
    let number = prompt("pls enter a number");
    let result = number % 2;
    if (result == 0) {
        alert("thiis an even number");
    } else if (result !== 0 && !(isNaN(number))) {
        alert("thi is not an even number");
    } else if (isNaN(number)) {
        alert("this is not a number");
    }



    //converting a number in figure to its equivalent in words by Emmanuel
    num = prompt("enter a number");
    let length = (num.length);
    let toNumber = Number(num);
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let fig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let convert = num.split("");

    let foo = convert.map(item => Number(item));
    alert(foo.reduce((a, c) => a + " " + arr[c], ""));



    //converting a number in figure to its equivalent in words by sir
    function numm(str) {
        let val = " ", newvar = " ";
        for (let i = 0; i <= length; i++) {
            newvar = parseInt(str[i]);
            val = val + " " + arr[newvar];
        }
        if{ length }
      alert(`${str} in wordes is :${val}`)
    }

    numm(num);





    //converting a number in figure to its equivalent in words
    let num = prompt("enter a number");
    let length = (num.length);
    let toNumber = Number(num);
    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let fig = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //let convert = num.split("");
    let a = fig[0]; let A = arr[0];
    let b = fig[1]; let B = arr[1];
    let c = fig[2]; let C = arr[2];
    let d = fig[3]; let D = arr[3];
    let e = fig[4]; let E = arr[4];
    let f = fig[5]; let F = arr[5];
    let g = fig[6]; let G = arr[6];
    let h = fig[7]; let H = arr[7];
    let k = fig[8]; let K = arr[8];
    let j = fig[9]; let J = arr[9];

    let emptyA = [];

    for (let i = 0; i <= length; i++) {
        if (num[i] == a) {
            emptyA.push("zero");
        } else if (num[i] == b) {
            emptyA.push("one");
        } else if (num[i] == c) {
            emptyA.push(C);
        } else if (num[i] == d) {
            emptyA.push(D);
        } else if (num[i] == e) {
            emptyA.push(E);
        } else if (num[i] == f) {
            emptyA.push(F);
        } else if (num[i] == g) {
            emptyA.push(G);
        } else if (num[i] == h) {
            emptyA.push(H);
        } else if (num[i] == k) {
            emptyA.push(K);
        } else if (num[i] == j) {
            emptyA.push(J);
        } else { }
    }; alert(emptyA);




    // do {alert
    //       yourName = prompt("Who are you?");
    //       } while (!yourName);
    //       console.log(yourName);






    let months = prompt("what is the month of the year");
    switch (months) {
        case "july":
            alert("the students are preparing for their third temexamination");
            break;
        case "june":
            alert("just rounded upthe first half of the year");
            break;
        case "faburary":
            alert("the fools are increasingin their numbers");
            break;
        case "march":
        case "dec":
            alert("I am marching forward");
            break;
        case "may":
            alert("its my birtday");
            break;
        default:
            alert("i dont know the season we are in");
            break;
    }
    // let myArray="nop";

    // alert(myArray[0]);
    // alert(myArray[1]);

    // let u="one";
    // alert(u[0] && u[1]);




    var browser = prompt("What is your browser type?", (" Edge,  Safari, chrome, Firefox, Opera"));

    switch (browser) {
        case "Edge":
            alert("You've got the Edge!");
            break;
        case "Chrome":
        case "Firefox":
        case "Safari":
        case "Opera":
            alert(browser);
            alert("Okay we support the " + browser + " too");
            break;
        default:
            alert(browser);
            alert("We hope that this " + browser + " looks ok!");
    }
    if (browser === "Edge") {
        alert("You've got the Edge!");
    } else if (
        browser === "Chrome" ||
        browser === "Firefox" ||
        browser === "Safari" ||
        browser == "Opera"
    ) {
        alert("Okay we support the browsers too");
    } else {
        alert("We hope that this page looks ok!");
    }



    // QUESTION 2
    let a = +prompt('a?', '');
    if (a == 0) {
        alert(0);
    }
    if (a == 1) {
        alert(1);
    }
    if (a == 2 || a == 3) {
        alert('2, 3');
    }
    let a = +prompt("a?", "");
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert("2, 3");
            break;
    }


    //replacing an array elementl
    // let arr=["apple", "mango", "orange", "banana", "tangeline" , []];
    // let anum=[1,5,5,5,5,4,5,5,4,1,2,2, ];
    //removing an element fromthe endof an array
    //arr.shift();
    //alert(arr);
    //removing the last element froman array
    //arr.pop();
    //alert(arr);
    //adding an element to the end of an array
    //arr.push("pineapple");
    //adding an element from the beginning
    //arr.unshift("udara");
    //alert(arr);
    // the mang bellow is referncing each of the index of the array. this is used to lop through an array
    // for (let mang of arr){
    //       alert(arr);
    //       break;
    // }
    /////to convert theelements of an array as a string
    //lettoSrting=String(arr);
    ///alert(anum[4][0]);
    // let mode =[];
    // mode[0]="goat";
    // mode.push("lion");
    // mode[1][5]="bird";
    //alert( mode );

    ///// using splice to remove a particular element from an array
    // arr.splice(4);
    // alert(arr);


    //alert( anum.slice(0, 4));
    /////to revert an array,it changes the order of anarray position
    //arr.reverse();
    //alert(arr);

    /////sorting an array
    //let sortin=arr.sort(function(a, b)
    //{ return(a-b);}
    //)

    //sorting can also be writtn as
    //let sorted=anum.sort((a,b)=>a.b);
    //alert(sorted);
    ////concatnation

    //let result=arr.concat(anum, names);

    // let sortResult=result.sort((a,b)=>a.b);
    // alert(sortResult);
    //alert(result.indexOf("ada"));
    // function fuc(name){
    //     let  names=[1, 2, 3, 4, 5, 6, 7, 8 ];
    //       let newname = Number(prompt("what name do you want to remove"));
    //       if(names.indexOf(newname) !== -1){
    //             alert(names.indexOf(newname));

    //             let lop=names.splice(names.indexOf(newname), 1);
    // alert(lop);
    // alert(names);

    //       }
    // }
    // fuc(name);
    // let mongopark=["apple", "mango", "orange", "banana", "tangeline" ];
    // mongopark.forEach((item, index, array)=>{
    //       alert(item);
    // })


    //function syntax
    function function-name{ function-body }

    //to call a function
    function-name();

    //eg on funtion ---this is called a name function because it has a name; greeting
    function greeting() {
        alert("Hi my name is Eze Bernardine")
    }
    greeting();

    //Writing a function that collect the name of users and greet you byyour name
    function greeting() {
        let name = prompt("what is your name");
        alert("Good morning " + " " + name);
    }
    greeting();

    //using a parameter with a function
    function Name(first, second)//parameters
    {
        alert(first + " " + "is a son of " + second);
    }
    Name("oluchi", "chidinma");//arguements
    Name("Bernardine", "Eze");

    //declaring a variable in a function.---this is a local scope---re-assigning variables
    y = 4;
    function addNumbers() {
        let x = 3;
        y = 10;
        alert(x + y);
    }
    alert(y);
    addNumbers();
    y = 10;
    alert(y);

    //return statement
    function studentName() {
        let firstName = "grace";
        let lastName = "anthony";
        let name = firstName + lastName;
        return name;
    }
    console.log(studentName());

    //classwork
    function funcName() {
        myNumbers = [[20, 12, 24, 5, 6], [1, 15, 8, 23, 10, 45], [7, 300, 9, 12, 4, 89]];

        firstIndex = myNumbers[0].reduce((sum, currentValue) => sum + currentValue)
        alert(c);
        secondIndex = myNumbers[1].reduce((sum, currentValue) => sum + currentValue)
        alert(d);
        thirdIndex = myNumbers[2].reduce((sum, currentValue) => sum + currentValue)
        alert(e);
        firstIndex = firstIndex * 0.2;
        secondIndex = secondIndex * 0.2;
        thirdIndex = thirdIndex * 0.2;
        var newArray = [];
        newArray.push(firstIndex);
        newArray.push(secondIndex);
        newArray.push(thirdIndex);
        alert(newArray);
        let totalArray = newArray.reduce((sum, currentValue) => sum + currentValue)
        alert(totalArray);
    }
    funcName();

    //eg 2  cheking  age and permission using function
    function checkAge(age) {
        if (age >= 18) {
            alert("you can go to the club");
        } else if (age < 18) {
            confirm("do you have parental permission?");
            alert("you have gotten parental permission!!");
        } else {
            alert("get out of here swine");
        }

    }
    age = prompt("How old are you?");
    checkAge(age);


    //function expression
    let myCoursemate = function (x, y) {
        //expression
        let mssage = x + y;
        alert(message);
    }
    myCoursemate(52, 536);


    //the forEach method
    const arr = ["hello", "good", "morning"]
    arr.forEach(function (any, index, arr) {//the major one isthe first: any. index and arr is optional. it just prints the indexes and the arrays
        console.log(any, index);
    });

    //filter using ES5
    let numbers = [52, 68, 5, 41, 2, 36, 2, 14, 64, 92, 62, 5, 632, 1, 4, 17, 1, 5, 84];
    alert(numbers[5]);
    let filt = numbers.filter(function (figure) {
        if (figure > 20) {
            return true;
        }
    });
    console.log(filt);

    //another method for filter using ES6
    let numbers = [8, 96, 4, 96, 456, 85, 4, 12, 8, 7, 85, 96, 4, 6, 8, 62, 630, 620, 26320];
    let filt = numbers.filter(figure => figure >= 85);
    console.log(filt);

    //the map function using ES6
    let resul = [{ name: "adanme", age: "52", school: "lizzy" },
    { name: "agaomuo", age: "12", school: "divine" },
    { name: "ob, age", age: 55, school: "oxford" }];
    let mapResult = resul.map(function (rer) {
        return (rer.name + rer.age + rer.school);
    })
    console.log(mapResult);



    //TO ADD OR REMOVE FROM AN ARRAY
    //       slice
    //       splice

    //---1---// the splice array method---can delete and can add elements to an array
    arrayName.splice("the-index-number", "the-number-of-elementes-to-be-deleted", "the-element-you-want-to-add-seperated-with-commas")//the syntax. after deleting, the index is removed
    let numbers = [5, 5, 13, 52, 45, 56];
    let sli = numbers.splice(0, 3);//i am deleting from the zeroth index, three elements
    sli = numbers.splice(1, 1);//from index 1, i removed one element
    sli = numbers.splice(2, 0);//this will delete no element from index two
    sli = numbers.splice(2, 0, "food");// from index two, delete zero number of element, and add the element food to that index
    sli = numbers.splice(-2, 0, 25);//two steps from the back to the frnt, delete none and insert 25//this will give you 5,5,13,52,25,45,56
    alert(numbers);
    let numbers = [5, 5, 13, 52, 45, 56];
    delete numbers[3];//this method, deletes the array at the that index,and leaves the index empty. there is still the same number of elements after deleting
    alert(sli);
    alert(numbers);
    //you also concat two arrays using this method
    let number = [5, 5, 13, 52, 45, 56];
    let numbers = [6, 6, 41, 86, 91,];
    let sli = numbers.splice(2, 0, number);//this will output 6, 6, 5 ,5, 13, 52, 45, 56, 41, 86, 91
    alert(numbers);
    let sli = numbers.splice(-0, 0, number);// here, i am adding the array from the back//this will give you 5,5,13,52,45,56,6,6,41,86,91


    //---2---// slice---it returns a new array from the start index to the end(the end is not included)
    //the syntax
    arrayName.slice(start, end);//the start is the index where the slicing will commence and the end, the index before where it will stop
    let numbers = [85, 6, 16, 4, 6, 45, 4, 68, 84, 12, 4, 5, 854, 85];
    let sli = numbers.slice(3, 5);//this will give you 4,6
    alert(sli);
    //NOTE--the  new array returned converts all stings to just arrays--Eg
    let numbers = ["20", "99", "46", "9",];
    let sli = numbers.slice(1, 3);// thi will give you 99,46
    sli = numbers.slice(-3);//when its a negative value, it starts counting from the back. It aslo makes usof one input ie -3
    alert(sli);


    //---3----// concat--it is used to join an array with other arrays or elements
    //syntax
    arrayName.concat(arguement1, arguement2...)
    //NOTE --when you concat an array withanothe array, it give you a single array. And with some values, it also gives you a single array.
    let numbers = [5, 5, 13, 52, 45, 56];
    let num = [5, 6, 263];
    let con = numbers.concat(num);//this will give you 5,5,13,52,45,56,5,6,263
    let conn = numbers.concat(num, 5, 2, 3);//this will output 5,5,13,52,45,56,5,6,263,5,2,3
    let combined = {
        name: "ada",
        pasword: "hj852",
    }
    let combinedArrObj = numbers.concat(combined);//this will give you 5,5,13,52,45,56,[object Object]---this  is because the obj combined is an obhect, and does not have "symbol.isconcatspreadable"
    //NOTE--to concat an object array and have its element added, you input "Symbol.isConcatSpreadable"
    let combined = {
        0: "ada",
        1: "hj852",
        [Symbol.isConcatSpreadable]: true,
        length: 2
    };
    let numbers = [5, 5, 13, 52, 45, 56];
    let combinedArrObj = numbers.concat(combined);// this output [5, 5, 13, 52, 45, 56, "ada", "hj852"]--this i because it contains the "[Symbol.isConcatSpreadable] :true," and "length:.."
    console.log(combinedArrObj);


    //To search from array
    //      indexOf--lastindexOf--include
    //      find---findIndez
    //      filter

    //--4---// indexOf--lastIndexOf---includes--all do similar things only on items and not character
    //it gets the index of the element
    //syntas
    arrayname.indexOf(item)
    // if the item is not found, -1is returned
    let numbers = [5, 6, 1, 1, 0, 61, 42, 4];
    let ind = numbers.indexOf(1);//this will output 2
    //includescheks if the element in question ispresent  in the array,not the index
    let present = numbers.includes(4);//this will output true
    alert(present);

//--5--// find--findIndex---It is used in an array of objects to find an object
//syntas
.//find returns one element
    arrayName.find(function (anyWord, index, array) { anyWord == "pick any word in the array" })
    let customer = [
        { id: 001, name: "Ada Mike", product: "Milk", email: "ada@gmail.com" },
        { id: 002, name: "Friday Chukwuma", product: "Milk", email: "friday@gmail.com" },
        { id: 003, name: "Ifeanyi Okeke", product: "Indomie", email: "ifeanyi@gmail.com" },
        { id: 004, name: "Michael Chilaka", product: "Milk", email: "michael@gmail.com" },
        { id: 001, name: "Bitrus Abah", product: "Fruits", email: "bitrus@gmail.com" },
    ]
    let fin = customer.find(item => item.id == "003");//this will output ifeanyi okeke 
    //findIndex returns the index where the element wrer foun
    alert(fin.name + index + array);


    //--6---// filter ----it returns an array, and element and/or the index
    //syntax
    arrayName.filter(any, index, array => any.sth..)
    let customer = [
        { id: 001, name: "Ada Mike", product: "Milk", email: "ada@gmail.com" },
        { id: 002, name: "Friday Chukwuma", product: "Milk", email: "friday@gmail.com" },
        { id: 003, name: "Ifeanyi Okeke", product: "Indomie", email: "ifeanyi@gmail.com" },
        { id: 004, name: "Michael Chilaka", product: "Milk", email: "michael@gmail.com" },
        { id: 005, name: "Bitrus Abah", product: "Fruits", email: "bitrus@gmail.com" },
        { id: 006, name: "Ada Ebuka", product: "Rice", email: "ada@gmail.com" },
        { id: 007, name: "Olodo Hen", product: "Beans", email: "olodo@gmail.com" },
        { id: 007, name: "Love You", product: "Garri", email: "love@gmail.com" },
        { id: 007, name: "Cherish You", product: "Orange", email: "cherish@gmail.com" },
        { id: 010, name: "Beautiful You", product: "Sugar", email: "beautiful@gmail.com" },
    ]
    let filt = customer.filter(index => index.id < 010);
    alert(filt.length)//this will output 9
    let numbers = [5, 5, 13, 52, 45, 56];
    let fil = numbers.filter(index => index > 10)//this will outpt 13,52,45,56
    alert(fil);


    //totransform an array or reorder it
    //      map
    //      sort
    //      reverse
    //      split and join

    //---7--// the map---it give  you a new array. When you wanna select some numbersand print then out, use filter; else, map will return true or false.
    //the syntax
    let result = arr.map(function (item, index, array)//the item is the individaul items
let arr = [5, 61, 6, 16, 1, 3, 01, 11, 251];
    let result = arr.map(val => val > 15);//this will output false,true,false,true,false,false,false,false,true
    alert(result);
    let customer = [
        { id: 001, name: "Ada Mike", product: "Milk", email: "ada@gmail.com" },
        { id: 002, name: "Friday Chukwuma", product: "Milk", email: "friday@gmail.com" },
        { id: 003, name: "Ifeanyi Okeke", product: "Indomie", email: "ifeanyi@gmail.com" },
        { id: 004, name: "Michael Chilaka", product: "Milk", email: "michael@gmail.com" },
        { id: 005, name: "Bitrus Abah", product: "Fruits", email: "bitrus@gmail.com" },
        { id: 006, name: "Ada Ebuka", product: "Rice", email: "ada@gmail.com" },
        { id: 007, name: "Olodo Hen", product: "Beans", email: "olodo@gmail.com" },
        { id: 007, name: "Love You", product: "Garri", email: "love@gmail.com" },
        { id: 007, name: "Cherish You", product: "Orange", email: "cherish@gmail.com" },
        { id: 010, name: "Beautiful You", product: "Sugar", email: "beautiful@gmail.com" },
    ]
    let ma = customer.map(val => val.name); this will output Ada Mike, Friday Chukwuma, Ifeanyi Okeke, Michael Chilaka, Bitrus Abah, Ada Ebuka, Olodo Hen, Love You, Cherish You, Beautiful You
    alert(ma);

    //--8--// sort
    //---It sorts the content of an array.It reorders  the content  of an array
    //sorting--the dash inbetwwen a & b means sort from lowest to highest' To sort from lowest tohighest, b-a
    let numbers = [8, 96, 4, 96, 456, 85, 4, 12, 8, 7, 85, 96, 4, 6, 8, 62, 630, 620, 26320];
    let sorrt = numbers.sort((a, b) => (a - b));
    console.log(sorrt);
    //sorting using arrow function
    let numbers = [845, 41, 4, 96, 456, 85, 4, 12, 8, 7, 85, 96, 4, 6, 8, 62, 630, 620, 26320];
    let sorrt = numbers.sort(function (a, b) {//a here is 845 and b is 9. then a again is 845 6and b is 9
        if (a < b) {
            return 1;
            console.log(a + " " + b);
        } else {
            return -1;
            console.log(a + " " + b);
        }
    });
    console.log(sorrt);

    //---9--// reverse---It isused reverse the order of an array
    //the syntax
    arrayName.reverse();
    let numbers = [66, 56, 6, 62, 4, 9, 66, 6,];
    let rev = numbers.reverse();//this will output 6,66,9,4,62,6,56,66
    alert(rev);

    //---10--// The reduce method.
    //It is used to add or determinethe sum of an array
    //the syntax
    arayname.reduce(sum, initial, index, array=>sum+current,0)
    let arr=[23132,216,16,212,212,26,4,4,6,3,4];
    let red=arr.reduce((sum,initial)=>sum+initial,0);//this will output 23835
    alert(red);
    let num=arr.reduce((sum,initial)=>sum-initial,0);//this  will output  -23835
    alert(num);
    let fig=arr.reduce((sum,initial)=>sum+initial,10);//this will output 23845
    alert(fig);
    //NOTE  the suminitially is 10
    //-------the initial value is 23132
    //------10 and 0 from the above one's is the initial sum
    //NOTE you can also ommit the iitail value which will authaumatically be zero

    //---11--// forEach method
    //it aloows to run the function for each element of the array
    let ages=["ada", "obi", "adanne", "adaugo", "john", "emeka", "ebuka", "gilert", "anthony", "destiny", "frank"];
    let each=ages.forEach((val,index,array)=>(  alert(`${val} is her name`)));//thhis wil alrt anthony is her name for intance for all the names 
    
    //---12---// Array.isArray
    //it is used to determine if the value is an array
    //fron the above array,
    alert(Array.isArray(ages));//this will alert true because the value ages is an array


//Hoisting
//The JavaScript engine treats all variable declarations using “var” as if they are declared at the top of a functional scope(if declared inside a function) or global scope(if declared outside of a function) regardless of where the actual declaration occurs. This essentially is “hoisting”.
//This is simply for instance
x=2;
alert(x);//this will alert 2
var x;
//x was declared after it has been used, sowill be hoisted
alert( nam);
var nam="41";//this will alert undefined because initalization is before the alert
//but if
alert( x);//this will alert an error
let x="2";
//this is beause everything above the let statement is in the deadzone.  The interpreter does not execute it.
//x was initialized after it has been used that is why is will not alert an error
//Therefore,  hoisting is the process of declaring a variable after using it. But you cannot initalize a variableafter using it. That is to say that, inialized variablesare not hoisted.
// Therefore hoising is the process of taking all declared variables on top of the progrem before excuting the program.

   
//Math
//this allwos you to perform mathematical task
Math.PI;            // returns 3.141592653589793
Math.round(x) returns the value of x rounded to its nearest integer

    //objexct
    let array = [];//for array
    let objexct = {};//forobject
    let obj = { one: 1, two: 2, three: 3 };//objects go with value and key
    let objString = {
        name: "obi",
        email: "demayous",
        password: "hj852",
        adress: "udogen street"
    };
    alert(objString.name)//obi
    alert(objString.email)//demayous
    alert(objString.name + objString.email) //obidemayous
    alert("name" + " " + objString.name + " " + "email" + " " + objString.email)

    //using literal strings rather than ""
    alert(`Name:${objString.name} Email:${objString.email}`)//Name:obi Email:demayous


    //bracket notation
    alert(objString["name"]);//obi

    //using functions with objects--------
    var data = {
        name: ada,
        age: 56
    };
    addNumbers

    //adding properties to an empty dbject
    let obj = {};
    obj.username = "obi";//i have assigned a key-username and a value obi
    obj.password = "hjk741";

    //looping through an object
    let objString = {
        name: "obi",
        email: "demayous",
        password: "hj852",
        adress: "udogen street"
    };
    for (let prop in objString) {//this is the {for in }method
        console.log(prop)// i am looping throughthe object and i am alerting all the propertis
        console.log(objString[prop]);// thiswill give me their keyes
    }

    //changing the keyes of an object and assigning them to a new object
    let newobj = objString;
    newobj.name = "emeka";
    newobj.password = "ghj5";
    alert(objString.name);

    //function
    function names(name1, name2) {
        return {
            fname: name1,
            lname: name2
        }
    }
    let myname = names("jude", "prince");
    console.log(myname.fname);

    //using Es6
    function names(name1, name2) {
        return {
            name1,
            name2
        }
    }
    let myname = names("jude", "prince");
    console.log(myname());

    //cloning an object
    let emptyobj = {};
    for (let key in names) {
        emptyobj[key] = names[key];
    }


    //using a shorter way.
    let emptyobj = {};
    Object.assign(destination[objec1, objec2]);
    Object.assign(emptyobj, names);// you are assigning  the value of

    //caveates is a waring or a notice-----obj are stored by reference while primitive data type is stored by the actual values
    function print() {
        var name = "victor";
        var file;
    }
    print();
    console.log(name);
    console.log(file);

    //mix of values
    let arr = ['Apple', { name: 'John' }, true, function () { alert('hello'); }];
    // get the object at index 1 and then show its name
    alert(arr[1].name); // John
    // get the function at index 3 and run it
    arr[3](); // hello

    //classwork
    debugger


    //1. Given the array of numbers above, write a javascript function that accepts the array,create a new array whose element are 20% of the original array.
    var mtArray = [
        [23, 156, 25, 10, 52, 23],
        [12, 100, 23, 56, 81, 93],
        [42.5, 71, 10, 23, 35, 11, 72, 99],
        [11, 100, 99, 102, 13, 8, 12]
    ]; let emptyArray = [];
    for (let i = 0; i < mtArray.length; i++) {
        for (let j = 0; j < mtArray[i].length; j++) {
            let ma = mtArray[i][j] * 0.2;
            emptyArray.push(Math.round(ma));
        };
    };
    alert(emptyArray);//this outputed 5,31,5,2,10,5,2,20,5,11,16,19,9,14,2,5,7,2,14,20,2,20,20,20,3,2,2

    //2. The "myArray" variable is multidimensional array.Use a nested `for` loop to cycle through `myArray`.Convert each even number to the string "even"Convert each odd number to the string "odd",
    var myArray = [
        [23, 156, 25, 10, 52, 23],
        [12, 100, 23, 56, 81, 93],
        [42.5, 71, 10, 23, 35, 11, 72, 99],
        [11, 100, 99, 102, 13, 8, 12]
    ];

    // No 3
    //Assuming the database below is your database:
    //(a)Find  a particular customer in the database whose iD is 003
    //(b)Find all customers whose ID is less than 010
    //(c)create a new database containing customers whose name contains the leter A
    let customer = [
        { id: 001, name: "Ada Mike", product: "Milk", email: "ada@gmail.com" },
        { id: 002, name: "Friday Chukwuma", product: "Milk", email: "friday@gmail.com" },
        { id: 003, name: "Ifeanyi Okeke", product: "Indomie", email: "ifeanyi@gmail.com" },
        { id: 004, name: "Michael Chilaka", product: "Milk", email: "michael@gmail.com" },
        { id: 005, name: "Bitrus Abah", product: "Fruits", email: "bitrus@gmail.com" },
        { id: 006, name: "Ada Ebuka", product: "Rice", email: "ada@gmail.com" },
        { id: 007, name: "Olodo Hen", product: "Beans", email: "olodo@gmail.com" },
        { id: 007, name: "Love You", product: "Garri", email: "love@gmail.com" },
        { id: 007, name: "Cherish You", product: "Orange", email: "cherish@gmail.com" },
        { id: 010, name: "Beautiful You", product: "Sugar", email: "beautiful@gmail.com" },
    ]

    //solution
    //3a
    let fin = customer.find(index => index.id == 003);//this will output 4
    alert(fin.name);

    //3b let fil=customer.filter((val,index,array)=>val.id<010);
    console.log(fil);

    //TOY question number two
    //1. Determine if a string is a palindrum or not without using higher functions
    //
    //Attemptng the parlindrum
    let arr = prompt("input a word");
    if (arr.length %== 0) {
        let num = Number(arr);

    }

  