<?php
$conn = mysqli_connect("localhost", "root", "", "hamza");
if (isset($_POST['submit'])) {
    $title = $_POST['title'];
    $content = $_POST['content'];
    $sql = "INSERT INTO blog (title, content) VALUES ('$title', '$content')";
    mysqli_query($conn, $sql);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
input,textarea{
padding: 20px 60px;
border-radius: 25px;
}
.title,.content{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
h1{
    text-align: center;
}
    </style>

</head>
<body>
    <h1>Add A Blog Post</h1>
    <form method="post">
        <div class="title">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">
        </div>
        <br>
       <div class="content">
       <label for="content">Content:</label>
        <textarea id="content" name="content"></textarea>
       </div>
        <br>
        <input type="submit" name="submit" value="Submit">
    </form>

   
</body>
</html>