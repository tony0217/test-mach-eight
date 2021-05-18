const { v4: uuidv4 } = require('uuid');
const Task = require('./task');
const { saveFile, readFile } = require('../helpers/crudFile');

// lista de tareas
class Tasks {

    _list = {};

    get getlistArray(){

        const listArr = [];
        Object.keys(this._list).forEach( key=>{
            const task = this._list[key];
            listArr.push(task);
        });

        return listArr;
    }


    constructor(_list){
        this._list = {};
    }

    loadTasks = (tasks = [])=> {
        tasks.forEach( task => this._list[task.id] = task);
    }

    deleteTask = (id = '') => {
        if(this._list[id]) delete this._list[id];
        saveFile(this.getlistArray);
    }



    createTask = ( desc ='' )=>{
        const task = new Task(desc);
        this._list[task.id] = task;
        saveFile(this.getlistArray);
    } 


    listFullTask = ( list = this.getlistArray )=> {

        console.log();
        list.forEach((el, i) =>{

            const idx = `${i+1}`.green
            const {desc,completedIn} = el;
            const statusTask = (completedIn)
                         ? `${completedIn}`.green
                         : 'Pendiente'.red;

            console.log(`${idx}.${desc} :: ${statusTask}`);

        });
    }


    listPendingCompleted = ( completed = true )=>{
        const list = this.getlistArray;
        const resultList = list.filter(({completedIn} = el) => (completed) ? completedIn : completedIn==null);
        this.listFullTask(resultList);
    }


    toogleCompletedTask = ( ids = []) => {

        ids.forEach((id) => {
            const task = this._list[id];

            if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }

        });


        this.getlistArray.forEach( task =>{

            if (!ids.includes(task.id)) {
                this._list[task.id].completedIn = null;
            }
        });

        saveFile(this.getlistArray);


      
    }





}

module.exports = Tasks;