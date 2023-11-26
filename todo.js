let todoList =
[
  {
    item: 'Buy Milk',
    dueDate: '4/10/2023'
  },
  {
    item: 'Go to College',
    dueDate: '4/10/2023'
  }
];

displayItems(); //page load hone ke liye starting mai call kiya

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value; //andar ki value ko nikaalne ke liye
  let todoDate =dateElement.value;
  todoList.push({item: todoItem, dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';

  displayItems(); //  naya item add krne par call kiya hai
}

function displayItems(){
  let containerElement =document.querySelector('.todo-container');

  let newHtml ='';

  for(let i =0;i<todoList.length;i++){
    let item =todoList[i].item;
    let dueDate =todoList[i].dueDate;
    newHtml +=`
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class='btn-delete' onclick="todoList.splice(${i},1);
    displayItems();  //to remove the deleted thing
    ">Delete</button>
   
    `
  }
  containerElement.innerHTML=newHtml;
}