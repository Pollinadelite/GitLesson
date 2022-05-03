let add_task = document.querySelector('#add_task')
let clear_tasks = document.querySelector('#clear_tasks')
let user_input = document.querySelector('#user_input')
let all_tasks = document.querySelector('#all_tasks')

clear_tasks.addEventListener('click', function(){
    all_tasks.innerHTML = ''
})

function create_task(){
    if(user_input.value == ''){
    alert ('Введите задание!')
        return
    }
    let task = document.createElement('h1')
    task.textContent = '- ' + user_input.value
    task.addEventListener('click', function(){
        if(task.style.textDecoration !='line_throught'){
              task.style.textDecoration ='line_throught'                                  
        }
        else{
             task.style.textDecoration = 'none'
       }
    })
    all_tasks.appendChild(task)
}

add_task.addEventListener('click', function(){
    create_task()
})
user_input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
    create_task()
    }                                   
})