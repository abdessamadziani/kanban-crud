

let btn=document.querySelector(".btn-task");
// btn.setAttribute("data-bs-toggle","modal") ;
// btn.setAttribute("href","#modal-task");

btn.setAttribute("draggable","true");

// btn.onclick()
// {
 
//     title.value=tasks[i].title;
//     if(tasks[i].type=="Feature")
//      radioFeature.checked=true;
//     else
//      radioBug.checked=true;
//      listPrio.value=tasks[i].priority;
//      listStatus.value=tasks[i].status;
//      date.value=tasks[i].date;
//      desc.value=tasks[i].description;
// }




    gp.innerHTML = `
    <div class="">
        <i class=" ${tasksStored[i].status==1 ? "bi bi-question-circle text-success fs-5 pe-2" :tasksStored[i].status==2 ? "fa-solid fa-circle-notch text-success fs-5 pe-2":tasksStored[i].status==3 ? "bi bi-check-circle text-success fs-5 pe-2":"" } "></i> 
    </div>
    <div class="">
        <div class="fs-5 text-capitalize p-1">${tasksStored[i].title}</div>
        <div class="">
            <div class="text-secondary">${i+1}# created in ${tasksStored[i].date}</div>
            <div class="" title="There is hardly anything more frustrating than having to look for current requirements in tens of comments under the actual description or having to decide which commenter is actually authorized to change the requirements. The goal here is to keep all the up-to-date requirements and details in the main/primary description of a task. Even though the information in comments may affect initial criteria, just update this primary description accordingly.">${tasksStored[i].description}</div>
        </div>
        <div class="">
            <span class="btn btn-primary">${tasksStored[i].priority}</span>
            <span class="btn btn-secondary text-black">${tasksStored[i].type}</span>
        </div>
    </div>
    
        `

        foreach(btn in button)
        {

        }