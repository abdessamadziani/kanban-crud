


function showInfo(id)
{    
    document.getElementById("task-title").style="none";
    document.getElementById("task-date").style="none";
    document.getElementById("task-description").style="none";
    document.getElementById("task-update-btn").style.display="block";
    document.getElementById("task-delete-btn").style.display="block";
    document.getElementById("task-save-btn").style.display="none";
    document.getElementById('hand').style.display = 'none';
    document.getElementById('titleinvalid').style.display = 'none';
    document.getElementById('hand-date').style.display = 'none';
    document.getElementById('dateinvalid').style.display = 'none';
    document.getElementById('hand-desc').style.display = 'none';
    document.getElementById('descinvalid').style.display = 'none';
    document.getElementById('task-description').setCustomValidity('');
    document.getElementById('task-title').setCustomValidity('');
    document.getElementById('task-date').setCustomValidity('');

    // console.log(id)
    document.getElementById("task-type-feature").removeAttribute("checked");
    document.getElementById("task-type-bug").removeAttribute("checked");
    document.getElementById("task-id").value=document.getElementById("task-id"+id).getAttribute("data");
    if(document.getElementById("type"+id).getAttribute("data")=="1")
    {
        document.getElementById("task-type-feature").setAttribute("checked","true");
    }
    else if(document.getElementById("type"+id).getAttribute("data")=="2")
    {
        document.getElementById("task-type-bug").setAttribute("checked","true");
    }
    document.getElementById("task-title").value=document.getElementById("title"+id).getAttribute("data");
    document.getElementById("task-priority").value=document.getElementById("priority"+id).getAttribute("data");
    document.getElementById("task-description").value=document.getElementById("description"+id).getAttribute("data");
    document.getElementById("task-date").value=document.getElementById("date"+id).getAttribute("data");
    document.getElementById("task-status").value=document.getElementById("task-status"+id).getAttribute("data");

}

document.getElementById("btn-add-task").onclick=function()
{

    document.getElementById("task-type-feature").removeAttribute("checked");
    document.getElementById("task-type-bug").removeAttribute("checked");
    document.getElementById("task-id").value="";
    document.getElementById("task-title").value="";
    document.getElementById("task-priority").value="1";
    document.getElementById("task-description").value="";
    document.getElementById("task-date").value="";
    document.getElementById("task-status").value="1";
    document.getElementById('task-delete-btn').style.display ="none";
    document.getElementById('task-update-btn').style.display ="none";
    document.getElementById('task-save-btn').style.display ="block";
}



//validation 



document.getElementById("task-title").oninvalid=function()
{
    document.getElementById('hand').style.display = 'block';
    document.getElementById('titleinvalid').style.display = 'block';
    document.getElementById("task-title").style.border = '2px solid red';
    document.getElementById('task-title').style.boxShadow = '0px 0px 10px red';
    document.getElementById('task-title').setCustomValidity('Enter Task Title');
}
    
    document.getElementById("task-title").oninput = function(){
    document.getElementById('hand').style.display = 'none';
    document.getElementById('task-title').style = 'none';
    document.getElementById('task-title').style.boxShadow = '0px 0px 10px green';
    document.getElementById('task-title').setCustomValidity('');
    document.getElementById('titleinvalid').style.display = 'none';
};

 document.getElementById("task-date").oninvalid=function()
  {
    document.getElementById('hand-date').style.display = 'block';
    document.getElementById('dateinvalid').style.display = 'block';
    document.getElementById("task-date").style.border = '2px solid red';
    document.getElementById('task-date').style.boxShadow = '0px 0px 10px red';
    document.getElementById('task-date').setCustomValidity('Enter Task date');

 }
 document.getElementById("task-date").oninput=function()
{
    document.getElementById('hand-date').style.display = 'none';
    document.getElementById('task-date').style = 'none';
    document.getElementById('task-date').style.boxShadow = '0px 0px 10px green';
    document.getElementById('task-date').setCustomValidity('');
    document.getElementById('dateinvalid').style.display = 'none';
};
 document.getElementById("task-description").oninvalid=function()
 {
    document.getElementById('hand-desc').style.display = 'block';
    document.getElementById('descinvalid').style.display = 'block';
    document.getElementById("task-description").style.border = '2px solid red';
    document.getElementById('task-description').style.boxShadow = '0px 0px 10px red';
    document.getElementById('task-description').setCustomValidity('Enter Task description');
  
 }
    document.getElementById("task-description").oninput = function(){
    document.getElementById('hand-desc').style.display = 'none';
    document.getElementById('task-description').style = 'none';
    document.getElementById('task-description').style.boxShadow = '0px 0px 10px green';
    document.getElementById('task-description').setCustomValidity('');
    document.getElementById('descinvalid').style.display = 'none';
};

 
  
    
//drag drop place
// let listitems=document.querySelectorAll(".tt")
// let lists=document.querySelectorAll(".ls")

// let draggeditem=null;
// for(let i=0;i<listitems.length;i++)
// {
//     let item = listitems[i];
//     item.addEventListener("dragstart",function()
//     {
//         console.log("dragstart")
//         draggeditem=item;
//         setTimeout(() => {
//             draggeditem.style.display="none"
 
//         },0);
//     })
//     item.addEventListener("dragend",function()
//     {
//         console.log("dragend")

//         setTimeout(() => {
//             draggeditem.style.display="block";

//         },0);
//     })


//     for(let j=0;j<lists.length;j++)
//     {
//          let list=lists[j];

//          list.addEventListener("dragover",function(e)
//          {
//             e.preventDefault();
//          })
//          list.addEventListener("dragenter",function(e)
//          {
//             e.preventDefault();
//          })
//          list.addEventListener("drop",function()
//          {
//             this.appendChild(draggeditem);
//          })
//     }

// }
    








 
