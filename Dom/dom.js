<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <form>
        <p>Enter an email address:</p>
        <input id="validate" type="email">
        <input type="submit" name="submit"  value="Submit" onclick="js();" />
    </form>
    <script>
        var a = getElementById("validate");
         function js() {
            if (a.search(/[,com]/) != -1){
                alert("Tel nr mustn't contain charachters");
            }
             else {
                alert ("The tel number is Ok");
            }
         }
    </script>

</body>

</html>