document.getElementById('formtarea').addEventListener('submit',guardarTarea)
    let title = document.getElementById('title').value
 
function stoppedTyping(){
    let title = document.getElementById('title')
    if(title.value=="") { 
            document.getElementById('btn-guardar').disabled = true; 
        } else { 
            document.getElementById('btn-guardar').disabled = false;
        }
}

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
    document.getElementById('btn-guardar').disabled = true; 
}


function getTasks(){
   let tasks=  JSON.parse(localStorage.getItem('tasks'));
    
  let taskview =  document.getElementById('tasks')
  
  taskview .innerHTML = ''
    
    for(let i = 0 ;i<tasks.length;i++){
        let title = tasks[i].title
        let description = tasks[i].description
        let checked = tasks[i].check
        taskview.innerHTML += `

<div class="card pt-6 mt-3 mb-3">
           <div class ="card-body">
        
 <div class="float-right custom-control custom-checkbox  ">
  <input type="checkbox"   id="${title}">
  <label class="custom-control-label"  for="${title}">Terminada</label>

</div>
<b>${title}</b><p>  ${description} </p>
             <a class=" btn btn-danger" onclick="deleteTasks('${title}')">Borrar</a>

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
