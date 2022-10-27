


let gp=document.createElement("button");
gp.classList.add("mt-1","bg-white","mb-1","pb-1","d-flex", "border-0", "text-start", "w-100","tt")
gp.setAttribute("data-bs-toggle","modal") ;
gp.setAttribute("data-bs-target","#taskBtn");
gp.setAttribute("draggable","true");



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