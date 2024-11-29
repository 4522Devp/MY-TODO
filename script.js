
const addtask = document.getElementById("addtaskbutton")


addtask.addEventListener("click", () => {
    WWorkFun();
})



// const tasktext = taskinput.value.trim();
// console.log("Clicked")

//     const newtask = document.createElement('li');

//     newtask.innerHTML = tasktext;
//     tasklist.appendChild(newtask);

// const deletebutton = newtask.querySelector('.delete-button');
// deletebutton.addEventListener('click', function () {
//     tasklist.removeChild(newtask);
// });
// taskinput.value = '';
// datainput.value = '';
// timeinput.value = '';

//}}




const WWorkFun = () => {

    const taskinput = document.getElementById('task-input');
    const datainput = document.getElementById('data-input');
    const timeinput = document.getElementById('time-input');
    const ampminput = document.getElementById('ampm-input');

    const tasktext = taskinput.value.trim();
    const taskdata = datainput.value;
    const tasktime = timeinput.value;
    const taskampm = ampminput.value;

    if (tasktext && taskdata && tasktime) {
        const tasklist = document.getElementById('New_Todos');
        const newtask = document.createElement('li');

        const tasktext = taskinput.value.trim();
        console.log("Clicked");

        newtask.innerHTML = tasktext;

        let store = {};

        newtask.innerHTML = `
        
        <div class = "task-info">

            <span><i class = "fas fa-tasks"></i> ${tasktext}</span>
            <span><i class="fa-solid fa-calendar-days"></i> ${taskdata}</span>
            <span><i class="fa-solid fa-clock"></i> ${tasktime} ${taskampm}</span>
            <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
        </div>

        <div class="task-action">
          
        </div>
        `;

        store[newtask];

        tasklist.appendChild(newtask);

        const deletebutton = newtask.querySelector('.delete-button');
        deletebutton.addEventListener('click', function () {
            tasklist.removeChild(newtask);
        });
        // taskinput.value = '';
        // datainput.value = '';
        // timeinput.value = '';

    }
}