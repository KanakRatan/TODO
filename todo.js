let todoList=[
  {
    item:'Buy Milk', 
    dueTime: '8:00',
    dueDate: '2024-07-19'
  },
  {
    item: 'Call Mum', 
    dueTime: '10:00',
    dueDate: '2024-07-18'
  }];
  
displayTodoList();
function addTodo(){
  let ele = document.querySelector('#todo-input');
  let time = document.querySelector('#todo-time');
  let date = document.querySelector('#todo-date');

  let todoItems = ele.value;
  let todoTime = time.value;
  let todoDate = date.value;

  todoList.push({item: todoItems, dueTime: todoTime, dueDate: todoDate});
  ele.value=placeholder=" ";
  time.value=' ';
  date.value=' ';
  displayTodoList();
}

function displayTodoList() {
  let displayEle = document.querySelector('.todo-container');
  
  let newHtml='';
  for(let i = 0; i<todoList.length; i++){
    let item=todoList[i].item;
    let dueTime=todoList[i].dueTime;
    let dueDate=todoList[i].dueDate;
    newHtml+=`
    <span>${item}</span> 
    <span>${dueTime}</span>
    <span>${dueDate}</span>
    <button class ="delete-btn" onclick= "todoList.splice(${i},1);
    displayTodoList();">Delete</button>
    `;
  }
  displayEle.innerHTML=newHtml;
}

