const { v4: uuidv4 } = require('uuid');

// tareas
class Task {

    id='';
    desc=''
    completedIn = null

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completedIn = null
    }


}

module.exports = Task;