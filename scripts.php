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
        $req="SELECT tasks.id,title,prioritises.name as 'priority',statuses.id as 'statuss',types.name as 'type',tasks.description,tasks.task_datetime, tasks.priority_id,tasks.type_id    FROM tasks,statuses,types,prioritises WHERE status_id=statuses.id and type_id=types.id and priority_id=prioritises.id ";
        $query=mysqli_query($conn,$req);
        while($rows=mysqli_fetch_assoc($query))
        {
            
            
            // if($nb==1){$icon="fa fa-question-circle ";$color="danger";}
            // elseif($nb==2){$icon="fa fa-circle-notch fa-spin";$color="warning";}
            // elseif($nb==3){$icon="fa-regular fa-circle-check ";$color="success";}
             if($rows['statuss']==$nb)
             { 
          
              $id=$rows['id'];
              
                echo ' 
                <button  draggable="true" data-bs-toggle="modal"   href="#modal-task"  class="d-flex border-0 text-start bg-white w-100 mb-2 p-2 w-100 btn-task tt" onclick="showInfo('.$id.')">
                <input type="hidden" name="task-id" data="'.$rows['id'].'" id="task-id'.$id.'">
                <div class="" fs-4">
                <i class=""></i> 
               </div>
                     <div class="">
                    <div id="title'.$id.'" data="'.$rows['title'].'" class="fs-5 text-capitalize p-1">'.$rows['title'].'</div>
                         <div class="m-1">
                         <div id="date'.$id.'" data="'.$rows['task_datetime'].'" class="text-secondary"> #'.$rows['id'].' created in'.$rows['task_datetime'].'</div>
                             <div id="description'.$id.'" data="'.$rows['description'].'" class="m-2" title="There is hain comments may affect initial criteria, just update this primary description accordingly.">'.$rows['description'].'</div>
                             </div>
                         <div class="m-3">
                        <span id="priority'.$id.'"  data="'.$rows['priority_id'].'" class="btn btn-primary">'.$rows['priority'].'</span>
                            <span id="type'.$id.'" data="'.$rows['type_id'].'" class="btn btn-secondary text-black">'.$rows['type'].'</span>
                            </div>
                     </div>
                     <input type="hidden" value="'.$rows['statuss'].'" id="task-status'.$id.'" data="'.$rows['statuss'].'" name="task-status">
               </button>';
             
            

             }
         
        //SQL SELECT
    }
    }
    function countDone($status)
    {
        include('database.php');
        $req="SELECT COUNT(*) As nbElements From tasks where status_id='$status'";
        $query=mysqli_query($conn,$req);
        $rows=mysqli_fetch_assoc($query);
          echo $rows['nbElements'];
        
    }


    function saveTask()
    {
        //CODE HERE
        include('database.php');


        $id=htmlspecialchars($_POST['task-id']);
        $title= htmlspecialchars($_POST['task-title']);
        $type=$_POST['task-type'];
        $priority=htmlspecialchars($_POST['task-priority']);
        $status=htmlspecialchars($_POST['task-status']);
        $date=htmlspecialchars($_POST['task-date']);
        $desc=htmlspecialchars($_POST['task-description']);
        $req="INSERT INTO `tasks` (`title`, `type_id`, `priority_id`, `status_id`, `task_datetime`, `description`) VALUES ( '$title', '$type', '$priority', '$status', '$date', '$desc') ";
        $query=mysqli_query($conn,$req);
        //SQL INSERT
        $_SESSION['message'] = "Task has been added successfully !";
		header('location: index.php');
    }

    function updateTask()
    {
        //CODE HERE
        include('database.php');

        $id=$_POST['task-id'];
        $title=htmlspecialchars($_POST['task-title']);
        $type=$_POST['task-type'];
        $Priority=htmlspecialchars($_POST['task-priority']);
        $status=htmlspecialchars($_POST['task-status']);
        $date=htmlspecialchars($_POST['task-date']);
        $desc=htmlspecialchars($_POST['task-description']);
        $req="UPDATE tasks set title='$title',`type_id`='$type',priority_id='$Priority',status_id='$status',task_datetime='$date',`description`='$desc' where id='$id' ";
        $query=mysqli_query($conn,$req);
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        include('database.php');
        
        $id=$_POST['task-id'];
        $req="DELETE FROM tasks where id='$id'";
        $query=mysqli_query($conn,$req);
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>