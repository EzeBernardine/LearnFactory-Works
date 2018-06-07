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


//ALL ABOUT ARRAYS
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
    sli = numbers.slice(-3);//when its a negative value, it starts counting from the back. It aslo makes use of one input ie -3
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
    let result = arr.map(function (item, index, array);//the item is the individaul items
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
    console.log(numbers.sort());//this will display [ 12, 26320, 4, 4, 4, 41, 456, 6, 62, 620, … ]its called dictionary sort
    alert(numbers.sort((a,b)=>a-b));//this will alert 4,4,4,6,7,8,8,12,41,62,85,85,96,96,456,620,630,845,26320
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

    //---8--1--//join
    //its like the opp of Array.from() method. it joins an array to form a string . it is also used to join an element in between the alresdy esixting arrray.
    //NOTE it accomodates one parameter, ie the element you want to join into the array.
    //syntax
    arrayName.join();
    let numbers=["mango","apple","orange"];
    alert(numbers.join(""));//this will output  mangoappleorange  as a string
    alert(numbers.join("looking"));//tis will alert mangolookingapplelookingorange   as a string

    //---10--// The reduce method.
    //It is used to add or determinethe sum of an array
    //the syntax
    arayname.reduce(sum, initial, index, array=>sum+current,initailSum)
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
    let each=ages.forEach((val,index,array)=>(  alert(`${val} is her name`)));//thhis wil alert anthony is her name for intance for all the names one after the other
    
    //---12---// Array.isArray
    //it is used to determine if the value is an array
    //fron the above array,
    alert(Array.isArray(ages));//this will alert true because the value ages is an array

    //---13--//Array.from()
    ///this s used tp convert a string to an array
    //the syntax
    Array.from(arrayName);
    //NOYE space are treated like characters
    let nubers="my love life";
    alert(Array.from(nubers));//this will output m,y, ,l,o,v,e, ,l,i,f,e


//Hoisting
    //The JavaScript engine treats all variable declarations using “var” as if they are     declared at the top of a functional scope(if declared inside a function) or global scope    (if declared outside of a function) regardless of where the actual declaration occurs.     This essentially is “hoisting”.
    //This is simply for instance
    x=2;
    alert(x);//this will alert 2
    var x;    //x was declared after it has been used, sowill be hoisted
    alert( nam);
    var nam="41";//this will alert undefined because initalization is before the alert
    //but if
    alert( x);//this will alert an error
    let x="2";
    //this is beause everything above the let statement is in the deadzone.  The interpreter     does not execute it.
    //x was initialized after it has been used that is why is will not alert an error
    //Therefore,  hoisting is the process of declaring a variable after using it. But you     cannot initalize a variableafter using it. That is to say that, inialized variablesare not     hoisted.
    // Therefore hoising is the process of taking all declared variables on top of the progrem     before excuting the program.

   
//Math
    //this allwos you to perform mathematical task
    Math.PI;            // returns 3.141592653589793
    Math.round(x) //returns the value of x rounded to its nearest integer;
    Math.pow(x, y) //returns the value of x to the power of y:
    Math.sqrt(x) //returns the square root of x
    Math.abs(x) //returns the absolute (positive) value of x://Example
    Math.abs(-4.7);     // returns 4.7 
    Math.floor(x) //eturns the value of x rounded down to its nearest integer:Example
    Math.floor(4.7);    // returns 4 
    Math.sin(x) //returns the sine (a value between -1 and 1) of the angle x (given in radians)              .if you want to use degrees instead of radians, you have to convert degrees to                 adians:Angle in radians = Angle in degrees x PI / 180.Example
    Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees) 
    Math.cos(x) //returns the cosine (a value between -1 and 1) of the angle x (given in                      radians).If you want to use degrees instead of radians, you have to convert                    degrees to dians:Angle in radians = Angle in degrees x PI / 180.Example
    Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees) 
    Math.min() and Math.max() //can be used to find the lowest or highest value in a list of                    arguments:Example
    Math.min(0, 150, 30, 20, -8, -200);  // returns -200 Example
    Math.max(0, 150, 30, 20, -8, -200);  // returns 150 
    Math.random() //returns a random number between 0 (inclusive),  and 1 (exclusive):



//OBJECTS    
    let  names=["gd","dvks","gdv","egcd","ehwebh"];
    alert(typeof names);//this will display an object
    let myName="bernardine";
    alert(typeof myName);//this will display string
    //that means an array is also an object
    var myString = new String("I'm a String object");
    alert(typeof myString);//this will display string

    //The strig objects
    //syntaxfor a string object
    let newString=new Strig("this si a string");
    //you can also use a primitive string to rep a string  object becausethe  javascript will do the conversion to an object for you
    let newString="this is a strng";

    //The properties of a string-----the length propertiy
    var myName = "Jeremy";
    document.write(myName.length);//will write the length of the string "Jeremy" (that is, 6 ) to the page.   

    //String methods
    //---1---// indexOf() and lastIndexOf()
    //they are  used to  check the position of a character in astring
    var myString = "Hello jeremy. How are you Jeremy";
    var foundAtPosition = myString.indexOf("Jeremy");
    alert(foundAtPosition);//this will alet 26 which is the character position of th second name(case sensitivity)
    foundAtPosition = myString.lastIndexOf("Jeremy");
    alert(foundAtPosition);//this will alert 26 which is gotten by startingfrom the last index to check

    //----2---// substr() and substring() Methods
    //they are both used to copy part of a string
    //syntax for substring
    arrayName.substring("the index you wanr=t to cut from", "the index before which you want to cut to")
    let myString="Bernardine";
    let mySubString=myString.substring(0,7);
    alert(mySubString);//This will alert Bernard
    //syntax for substr()
    arrayName.substr("the index from which you want to cut from","the length of the string you want to cut")
    let myString="Bernardine";
    let mySubString=myString.substr(0,7);
    alert(mySubString);//This will also alert Bernard
    //NOTE the second parameter is optional. if you do not include it, the whole characters from the starting positon will be printed

    //---3---// toLowerCase() and toUpperCase() Methods
    ///they are both used to change the case of a character
    //the syntax of both do not take any parameters
    let myString="this is my Name dear";
    alert(myString.toLowerCase());//This will display this is my name dear
    alert(myString.toUpperCase());//This will alert THIS IS MY NAME DEAR

    //---4--// charAt() and charCodeAt() Methods
    //it is used to reference the characters of an object
    //syntax for charAt()
    charAt("an index position")
    let myName="Bernardine";
    alert(myName.charAt(7));//this will alert the character i
    //syntax for charCodeAt()
    //it also takes one parameter, but display the character-code-of the index
    let myName="Bernardine";
    alert(myName.charCodeAt(7));//this will display 105
    //Chaaractercodes go seqeuentially
    a-z-----97up
    A-Z-----65up
    0-9-----48-57

    //---5---// fromCharCode()method
    //syntax
    String.fromCharCode("the numbersyou want to fund their their charCode")
    //NOTE the string is constant, you don't eed to declare it. It hepls convert the values from the convert intoa string
    //it is used to convert a bunch of character code nubers to its equivalent alphabet ornumbers
    //syntax
    fromCharCode();
    var myString = String.fromCharCode(65,66,67);
    alert(myString);//this will alert ABC
    let alpha="";
    for(let char=65; char<=90; char++){
            alpha=alpha +" "+ String.fromCharCode(char);
    }
    alert(alpha);//this will alert A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

    //---6---//trim() method.
    //it is used to remove white spaces from astring andreturns the new string
    //syntax
    arrayName.trim()
    let numbers=" Princess";
    numbers=numbers.trim();
    if(numbers=="Princess"){
        alert(numbers);
    }
   let numbers=" Princess";
    numbers=numbers.trim();
    if(numbers=="Princess"){
        alert(numbers);//this will display Princess not minding the spacebefore the princess
    }

    //---7--//the split() method
    //syntax
    arrayName.split("",lmit)
    let numbers="dsjfiunjnjfnjnsdjhui";
    //if the seperator is an empty string, an array of characters is returned
    alert(numbers.split(""))  ;  //this will output d,s,j,f,i,u,n,j,n,j,f,n,j,n,s,d,j,h,u,i
    alert(numbers.split(j))  ; //this will alert not defined
    //if no seperator is specified at all,an array containing the input strng is returned
    alert(numbers.split()) ;//this will output  dsjfiuwefnjnsdjhui
    alert(numbers.split("", 2)) ;//this will output   d,s
    alert(numbers.split("2"))  ; //this will output  dsjfiuwefnjnsdjhui
    //alert(numbers.split(nj)) ;//this will return jn not defined
    //when the seperator is an element inside the array, it changes it to a comma
    alert(numbers.split("nj")) ;//thiw will output dsjfiu,,f,nsdjhui
    let numbers="dsjfiunjnjfnjnsdjhui";
    alert(numbers.split("j")) ;//this will output ds,fiun,n,fn,nsd,hui

    //---8---//replace
    //it returns a new string with the changed word
    //syntax
    arrayName.replace("word to change", "word to changed to")
    let name="adanma is a very ggod girl girlanda very obidientt one at that as well as adaeze";
    let obi="i love eating and praying";
    alert(name.replace("ada", obi))//this willalert i love eatung and prayingnma is a very ggod girl girlanda very obidientt one at that as well as adaeze
    alert(name.replace("ada","obi"));//this will output obinma is a very ggod girl girlanda very obidientt one at that s well as adaeze

    //---9--//search
    //search helps  yo find if a wordiscontainedin a string. if it is, it returns the index.if its not, it returns -1
    //syntax
    arrayName.search("item")
    let paragraph="theeaarlier yu come, the better for you dearie";
    alert(paragraph.search("come"));//this will output 15
    alert(paragraph.search("came"));//this willoutput -1

    //----10--//match
    //it is similar to the saerch method, but returns an array of the matched item
    //syntax
    arrayName.match("item");
    let word="the incoruptable state administratuon od the independent judiciary is really alarming";
    alert(word.match("judiciaryis"));//this will return null
    alert(word.match("judiciary is"));//thie=swill return judiciary is


//DOM 
   //using this as a case study
   <body>
    <div id="output">this is my first header dear</div>
    <div class="divTwo">this is my first class</div>
    <div class="secondClass">this is my secondclass</div>
    <ul class="list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
   </body>
   //--1--// document.getElementById("idName")
   //to reference a particula id tag, you use
   document.getElementById("idName")
   let myFirstDiv=document.getElementById("output");
   console.log(myFirstDiv);//this consoled <div id="output">
   //to style any reference id, just put
   .style."stlyeType"="";
   myFirstDiv.style.color="blue";   //this changed the colour of the div tag content
    myFirstDiv.style.padding=" 100px 0 0 200px";//t[0]his changed the padding positions


    //--2--//document.getElementsByTagName("tagname")[index]
    //to selectany tag(s) you use
    document.getElementsByTagName("tagname")
    let tagName=document.getElementsByTagName("div");
    console.log(tagName);//this consoled HTMLCollection(3) [ div#output, div.divTwo, div.secondClass ]
    //to select any of the collections
    first  document.getElementsByTagName("tagname")[index]
    secondly   tagName[0];//where tagName is a variable
    console.log(tagName[0]);//this displayed <div id="output">
    let tagName=document.getElementsByTagName("div");
    tagName[1].style.padding=" 100px 0 0 200px";//this padded the second div tag
    tagName[1].style.color="red";//this changed the color
    //NOTE you cannot use a tag name without specifying the index

    //---3---//document.queryselector
    //this is used select the first element that matches the provided selector
    //syntax
    document.queryselectpr(".-class-or-#-id  a-space  the-tag-name")
    let queryy=document.querySelector(".secondClass span")
    console.log(queryy);//this displayed <span>
    queryy.style.color="red";//this displayed the span content red

    //-4--//document.queryselectorAlll("")
    //this is used to  select all the elemnts that matches the selector
    //syntax
    document.querySelectorAll(".class-or-#id  a-space  the-tag-na")//this querries every thing inside the document
    //NOTE ---if i write 
    output.querySelector("tagName")//i am quering every thing inside the output div only
    //toselect any of the list
     document.querySelectorAll(".class-or-#id  a-space  the-tag-name")[index]
    let allQuerry=document.querySelectorAll(".secondClass span")
    allQuerry[2].style.color="yellow";
    console.log(allQuerry);//this displayed NodeList(3) [ span, span, span ]
    //NOTEto modify allthe list,  you coulduse aloop.
    for(let i=0; i<allQuerry.length; i++){
        alert(allQuerry[i].style.color="yellow");//this will alert the color yellow and also take effect
        alert(allQuerry[i].style.padding=" 100px 0 0 200px");//this will alert the padding dimensions and also take effect
    }//this changed all the colors at once, and gave each paddings 


    //--5--//document.documentElement
    //it is used to return the reference of the root element 
    let doc=document.documentElement;
    console.log(doc);//this outputed <html lang="en">
    console.log(doc.elementObjectProperty)

    
    //--6--//documentElementt
    //this is used to expose only properties and methods
    let doc=document.documentElement;
    console.log(doc)//this will output <html lang="en">
    
   
    //--7--//the tagName property 
    ///this is a way of getting an element tag name
    //it is  used to refernce the tag name of the element
    let doc=document.documentElement;
    console.log(doc.tagName)//this will output HTML

    //--8--//methods of he Element Object
    //--8a---//the getAttibute() method
    //it returns the value of the supplied attribute and null if the attribute doesnot exist
    //syntax
    arrayName.getAttribute(attributename)
    //--8b-//the setAttribute()
    //it is used to set thr value of an attribute
    //syntax
    arrayName.setAttribute(attributeName)
    //--8c--//the removeAtttribute method
    //its used to remove the value of an attribute and set it to default
    //syntax
    arrayName.removeAttribute(attributeName)
    //example
    let newId=document.getElementById("output");
    console.log(newId.setAttribute("align" ,"right"))//this will display the the content  with the id tothe right
    alert(newId.getAttribute("align" ))//this will display right
    console.log(newId.removeAttribute("align" ,"right"))//this will remove the value of the attributeand set it to default
   

    //--9--//node object
    let doc=document.documentElement;
    let headEr=doc.firstChild;
    console.log(headEr)//this will alert <head>
    let firstId=document.getElementById("output")
    console.log(firstId.firstChild)
    console.log(firstId.lastChild)
    console.log(firstId.nextSibling.nodeValue)
    console.log(firstId.nodeName)
    let lis =document.getElementsByClassName("list")
    console.log(lis)
    console.log(lis.firstChild)
    console.log(lis.lastChild)
    console.log(lis.nextSibling)
    console.log(lis.nodeName)

    //--10--//methods of node object
    //--10a--//appendChild()
    ///syntax
    arrayName.appendChild()
    //it adds an  extra node to the end of the child node
    //--10b--//cloneNode()
    //it is used to duplicate  a node. It accepts aboolen value: if true,both parent node and child nodes are duplicated, but if false, only the parent node is duplicated
    //syntax
    cloneNode(true or false)
    //--10c--//hasChildNode()
    //it returns true if the node has a child and false if it doesn't
    //--10d--//removeNode(childode)
    //it removes the childnodes of the Node object and returns theremoved node


    //creating element and text in the DOM
    //--11-a-//createElement("eiementname")
    //this is used to create a node with the  specified elementname
    let newElement=document.createElement("h2")//this will create a new element in the document
    //---11b--//createTextElement("text")
    //it osused to create and return  a text node with the specified text
    let newText=document.createTextNode("Emeka is my friend, and Immanuel the love of my life")//this will create a new text in the already created element, h2
     console.log(document.documentElement)///thiswil displsy  reference
    newElement.appendChild(newText)
    console.log(document.documentElement)//thi will contain the newElement and the newText
    document.body.appendChild(newElement)//this will writ the write the newElement containing the newText to the body of the document
    let newDoc=document.documentElement;
    console.log(newDoc);//this contains in the element h2and the text newText 

    //manipulating the DOM
    //Changing appearancces cac be achievedwith twomethods
    //-a-----using the style property
    let newId=document.getElementById("spanned")
    newId.style.color="green";//this will change the color of the text with the selected id
    //   NOTE   //when a stlyName contains-a-hyphen, the syntax changes
    newId.style.backgroundColor="red";//this changed the color of the background
    newId.style.marginLeft="200px";//this  changed the margin
    //to check for already existing style
    let out=document.getElementById("output");
    alert(out.style.color);//this this will alert an empty string
    alert(out.style.marginLeft);//this will alert an empty strimg
    alert(out.style.paddingLeft);//this alerted 20px
    //NOTE you cannot retrive an attribute in a <style>, but can retrive an attribute in an inline style. This is because the inline style is contained dirctly to the idname
    //--b----chsnging the value of the element class attrobute
    let spanned=document.getElementById("spanned");
    spanned.className="c-las";
    alert(spanned.style.color);

    //Positioning and moving content
    let move=document.getElementById("spanned");
    move.style.position="relative";
    alert(move.style.position);//this will alert relative
    move.style.left="400px";//this moved the positon 400px to the right


// EVENTS  //
    //using the two anchr tages for a case study
    <a href="../" class="runanchor" onclick="return run()">GOING</a>//the return key word will return the return part of the function which is true: meaning it will allow the href to load
    <a href="../" class="dontrunanchor" onclick="return dontRun()">GONE</a>//the return keyword will return the false return from the function,meaning it will not allow the href to load
        function run() {
            alert("you are about to go to another page")
            return true;//this allows the href to load
        }
        
        function dontRun() {
            alert("surry you can't migrat to this page")
            return false;//this prevebnts the href to load
        }
    //NOTE not objects and method makes use of the return key word   
     <a href="../" class="dontrunanchor" onclick="handle(event)">this is an event</a>//the event passed as a parameter tells the type of event the anchor tag is undergoing
     function handle(e){//e can be eny alphabet
         alert(" you are on the right path")
         alert(e.type)//this will alert click
     }
      function handle(e){//e can be eny alphabet
         alert(" you are on the right path")
         alert(e.type)//this will alert mouseover when you hover over the link
     }

    


    




//   REACT   //
   //to install nodejs
        curl -sl https://deb.nodesource.com/setup_8.x | sudo -E bash -
        //after wich you type
        sudo apt-get install -y nodejs
        //to check for your current version
        nodejs --version
    //the STATE facilitates the rendering and re-rendering the react
    //COMPONENTS is as portion of your app that house every other section (i think its like function)  React components is a javascript class
    //Vertual Dom helps to improve performance. It does the mounting/updating on a main DOM. It is very fast
    //MVC MODEL--database VIEW--UI   CONTROL--server
    //Node servers enables multiple request at a time(synchronous ) but if the user has to wait for another user to revieve feedback before he can, it is called (asynchronous)
    //React is just for VIEW: V, we use mongodp---for MODEL;M and NODE for CONTROL;C.
    //React is front end




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
       //console.log(prop);// i am looping throughthe object and i am alerting all the propertis
       // console.log(objString[prop]);// thiswill give me their keyes
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
       // emptyobj[key] = names[key];
        };
    
    
    //using a shorter way.
    let emptyobj = {};
    Object.assign(destination[objec1, objec2]);
    Object.assign(emptyobj, names);// you are assigning  the value of

    //caviates is a waring or a notice-----obj are stored by reference while primitive data type is stored by the actual values
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
    //Attemptng the palindrome
    let arr = prompt("input a word");
    if (arr.length %== 0) {
        let num = Number(arr);

    }

    //a program written by Eazy  on web navigation
    alert(location.href);//this will alert your current web address
    if(confirm('Want to go to W3schools?')){//this will alert the question specified with a yes or  a no
        location.href ='http://w3schools.com'//this takes you to the location
    } else{
        location.href = 'http://google.com'//this takes you the location if you click cancel
    }
    
    //using template strings
    let EzeBernardine="loveable";
    console.log(`i am a  ${EzeBernardine} girl, and i am fair`)

    //destructuring
    let {name,age, year}=[];//this means thay name. year, and age are all arrays
    let num=[1,3,6,84];
    let [a,c,s,d]=num;
    alert(a)//this will alert 1
