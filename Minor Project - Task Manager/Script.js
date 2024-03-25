const Input = document.getElementById("Input-task")
const List = document.getElementById("list")

function newtask(){
       if(Input.value === ''){
        alert("Write a task to add!");
       }
       else{
        let li = document.createElement("li");
        li.innerHTML = Input.value;
        List.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       }

       //    to clear the input bar after adding
       Input.value='';
       savetask();

    }

    List.addEventListener("click" , function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savetask();
        }
        else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savetask();
    }
    }, false);

    function savetask(){
        localStorage.setItem("tasks", List.innerHTML);
    }

    function showtask(){
        List.innerHTML = localStorage.getItem("tasks");
    }

    showtask();
    //The savetask() will save the tasks on local storage so that it wont get lost everytime we refresh it. 
    //and showtask() will show the tasks on screen. 