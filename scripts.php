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







    function getTasks($nb)
    {
        //CODE HERE
        include('database.php');
        $req="select * from tasks";
        $query=mysqli_query($conn,$req);
        while($rows=mysqli_fetch_assoc($query))
        {
            
            if($nb==1){$icon="fa fa-question-circle ";$color="danger";}
            elseif($nb==2){$icon="fa fa-circle-notch fa-spin";$color="warning";}
            elseif($nb==3){$icon="fa-regular fa-circle-check ";$color="success";}
            if($rows['statuss']==$nb)
            {
              $id=$rows['id'];
            
                echo '<a href="?id='.$id.'" class="text-decoration-none"><button  class="d-flex border-0 text-start bg-white w-100 mb-2 p-2 w-100 btn-task">
                <div class="text-'.$color.' fs-4">
                <i class="'.$icon.'"></i> 
               </div>
                     <div class="">
                    <div class="fs-5 text-capitalize p-1">'.$rows['title'].'</div>
                         <div class="m-1">
                         <div class="text-secondary"> #'.$rows['id'].' created in'.$rows['task_datetime'].'</div>
                             <div class="m-2" title="There is hain comments may affect initial criteria, just update this primary description accordingly.">'.$rows['description'].'</div>
                             </div>
                         <div class="m-3">
                        <span class="btn btn-primary">'.$rows['priority'].'</span>
                            <span class="btn btn-secondary text-black">'.$rows['type'].'</span>
                            </div>
                     </div>
               </button></a>';
            

            }
         
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

        $id=$_GET['id'];
        // ['task-id']=$id

        // [task_id]=$id;
    
        $req="DELETE FROM tasks where id='$id'";
        $query=mysqli_query($conn,$req);
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>