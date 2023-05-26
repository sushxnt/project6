<?php

require('connection.php');

#for login
if(isset($_POST['signin']))
{
    $query="SELECT * FROM `registration` WHERE `email`='$_POST[email]'";
    $result=mysqli_query($con,$query);
    
    if($result)
    {
        if(mysqli_num_rows($result)==1)
        {
            $result_fetch=mysqli_fetch_assoc($result);
            if(password_verify($_POST['psw'],$result_fetch['password']))
            {
                echo"right";
            }
            else
            {
                echo "
                    <script>
                        alert('Incorrect password');
                        window.location.href='signin.html';
                    </script>";

            }
        }
        else{
            echo "
                <script>
                    alert('Email not registered.');
                    window.location.href='signin.html';
                </script>";
        }
    }
    else{
        echo "
            <script>
                alert('Cannot run query');
                window.location.href='signin.html';
            </script>";
    }
}

#for register
if(isset($_POST['signup']))
{
    $user_exist_query="SELECT * FROM `registration` WHERE `email`='$_POST[email]'";
    $result=mysqli_query($con,$user_exist_query);
    
    if($result)
    {
        if(mysqli_num_rows($result)>0) #it will be executed if email is already taken
        {
            #if any user has already taken email
            $result_fetch=mysqli_fetch_assoc($result);
            if($result_fetch['email']==$_POST['email'])
            {
                echo "
                    <script>
                        alert('$result_fetch[email] - Email already taken.');
                        window.location.href='signup.html';
                    </script>";
            }
            else{
                #error for email already registered
                echo "
                    <script>
                        alert('$result_fetch[email]- E-mail laready registered');
                        window.location.href='signup.html';
                    </script>";
            }
        }
        else #it will be executed if noone has taken email
        {
            $password=password_hash($_POST['psw'],PASSWORD_BCRYPT);
            $query="INSERT INTO `registration` (`first_name`, `last_name`, `team_name`, `email`, `contact_no`, `password`) VALUES ('$_POST[fname]', '$_POST[lname]', '$_POST[tname]', '$_POST[email]', '$_POST[contact]', '$password')";
            if(mysqli_query($con,$query))
            {
                #if data inserted successfully.
                echo "
                    <script>
                        alert('Registration Successful!');
                        window.location.href='./dashboard.html';
                    </script>";

            }
            else{
                #if data cannot be inserted
                echo "
                    <script>
                        alert('Cannot run query');
                        window.location.href='signup.html';
                    </script>";
            }
        }
    }
    else{
        echo "
            <script>
                alert('Cannot run query');
                window.location.href='signup.html';
            </script>";
    }
}
?>