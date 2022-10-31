
function showInfo(id)
{
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
    console.log(document.getElementById("type"+id).getAttribute("data"));
   
}

document.getElementById("btn-add-task").onclick=function()
{
    document.getElementById("task-type-feature").removeAttribute("checked");
    document.getElementById("task-type-bug").removeAttribute("checked");
    document.getElementById("task-id").value="";
    document.getElementById("task-title").value="";
    document.getElementById("task-priority").value="";
    document.getElementById("task-description").value="";
    document.getElementById("task-date").value="";
    document.getElementById("task-status").value="";
}


 
  
    
//drag drop place
   let listitems=document.querySelectorAll(".tt")
   let lists=document.querySelectorAll(".ls")

let draggeditem=null;
for(let i=0;i<listitems.length;i++)
{
    let item = listitems[i];
    item.addEventListener("dragstart",function()
    {
        console.log("dragstart")
        draggeditem=item;
        setTimeout(() => {
            draggeditem.style.display="none"
            // console.log(tasks[i].status)
            // tasks[i].status="2";
            // console.log(tasks[i].status)


        },0);
    })
    item.addEventListener("dragend",function()
    {
        console.log("dragend")

        setTimeout(() => {
            draggeditem.style.display="block";

        },0);
        //  draggeditem=null;

    })


    for(let j=0;j<lists.length;j++)
    {
         let list=lists[j];

         list.addEventListener("dragover",function(e)
         {
            e.preventDefault();
         })
         list.addEventListener("dragenter",function(e)
         {
            e.preventDefault();
         })
         list.addEventListener("drop",function()
         {
            this.appendChild(draggeditem);
         })
    }


}
    








 
