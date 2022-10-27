<?php
 
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES

    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    
 //ROUTING end







    function getTasks()
    {
        //CODE HERE
        include('database.php');
        $req="select * from tasks";
        $query=mysqli_query($conn,$req);
        while($rows=mysqli_fetch_assoc($query))
        {
            if($rows['statuss']==1)
            {

            }



       echo "<button class='d-flex border-0 text-start bg-white w-100 mb-2 p-2 w-100'>";
       echo "<div>";
             echo "<i class=' bi bi-question-circle text-success fs-5 pe-2'></i>";
                echo "</div class=''>";
            echo "<div class=''>";
           echo "<div class='fs-5 text-capitalize p-1'>".$rows['title']."</div>";
                echo "<div class=''>";
                echo "<div class='text-secondary'> #1 created in ".$rows['task_datetime']."</div>";
                    echo "<div class='' title='There is hain comments may affect initial criteria, just update this primary description accordingly.'>".$rows['description']."</div>";
                    echo "</div>";
                echo"<div class=''>";
                echo"<span class='btn btn-primary'>".$rows['priority']."</span>";
                    echo"<span class='btn btn-secondary text-black'>".$rows['type']."</span>";
                    echo"</div>";
            echo"</div>";
      echo "</button>";
    
  

    
        //SQL SELECT
    }
    }


    function saveTask()
    {
        //CODE HERE
        include('database.php');

    

        $id=$_POST['task-id'];
        $title=$_POST['task-title'];
        $type=$_POST['task-type'];
        $Priority=$_POST['task-priority'];
        $status=$_POST['task-status'];
        $date=$_POST['task-date'];
        $desc=$_POST['task-description'];
        $req="INSERT INTO tasks (title,`type`,priority,statuss,task_datetime,`description`) VALUES ('$title','$type','$Priority','$status',' $date','$desc') ";
        $query=mysqli_query($conn,$req);
        //SQL INSERT
        $_SESSION['message'] = "Task has been added successfully !";
		header('location: index.php');
    }

    function updateTask()
    {
        //CODE HERE
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        include('database.php');

        $id=$_POST['task-id'];
    
        $req="DELETE FROM tasks where id='$id' ";
        $query=mysqli_query($conn,$req);
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>