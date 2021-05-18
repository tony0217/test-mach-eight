require('colors');
// const {showMenu, pause} =  require('./helpers/mensaje');

const { 
    inquirerMenu,
    setInput,
    deleteMenu,
    pause,
    showCheckList,
    confirmed
} = require('./helpers/inquirer');
const { readFile } = require('./helpers/crudFile');
const Task = require('./models/task');
const Tasks = require('./models/tasks');
console.clear();

const main = async () =>{

    let opt = '';

    // listar tareas 
    const tasks = new Tasks();

    const loadTasks = readFile();

    if (loadTasks) {
        tasks.loadTasks(loadTasks);
    }
    

    do {
        // esperar que se resuelva el la promesa del menu
       // opt = await showMenu();
        //console.log(opt);
       // if(opt!== '0') await pause();



        // mostrar menu
       opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // almacenar el valor de descripcion
                const desc = await setInput('descripcion');
                tasks.createTask(desc);
                break;
            case '2':
                 tasks.listFullTask();
                break;

            case '3':
                tasks.listPendingCompleted(true);
            break;

            case '4':
                tasks.listPendingCompleted(false);
            break;

            case '5':
                const ids = await showCheckList(tasks.getlistArray);
                tasks.toogleCompletedTask(ids);
            break;

            case '6':
                const id = await deleteMenu(tasks.getlistArray);
                const confirm = await confirmed('¿ seguro de elimiar esta tare ?')

                if (id !=='0') {
                  if (confirm) 
                    tasks.deleteTask(id),
                    console.log('tareas eliminada');
                }

            break;


            

               
        
            default:
                break;
        }

       //pausar la consola
        if(opt!== '0') await pause();
      


        
    } while (opt !=='0');
     
    
}

main();