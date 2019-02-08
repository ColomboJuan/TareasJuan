document.getElementById('formtarea').addEventListener('submit',guardarTarea)

function guardarTarea(e){
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    console.log(title+ description)
    
    
    const task = {
        title,
        description
    }
    
   // localStorage.setItem('tasks',JSON.stringify(task))
    if(localStorage.getItem('tasks') === null){
        let tasks =[]
        tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        
    }else{
       let tasks =JSON.parse( localStorage.getItem('tasks'))
       tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    
    
    getTasks()
document.getElementById('formtarea').reset()
    e.preventDefault()
}


function getTasks(){
   let tasks=  JSON.parse(localStorage.getItem('tasks'));
    
  let taskview =  document.getElementById('tasks')
  
  taskview .innerHTML = ''
    
    for(let i = 0 ;i<tasks.length;i++){
        let title = tasks[i].title
        let description = tasks[i].description
        taskview.innerHTML += `

<div class="card pt-6 mt-3 mb-3">
           <div class ="card-body">
            <p>${title} - ${description} </p>
             <a class=" btn btn-danger" onclick="deleteTasks('${title}')">Delete</a>
            </div>
             </div>`
    }
}

function deleteTasks(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].title == title){
           
            tasks.splice(i,1)
        }
        
        
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    getTasks()
}
getTasks()