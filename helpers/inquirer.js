const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');
require('colors');


const question = [
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea Hacer?',
        choices:[
            {
                value:'1',
                name:`${'1.'.green} Crear Tarea`,
            },
            {
                value:'2',
                name:`${'2.'.green} Listar Tareas`,
            },
            {
                value:'3',
                name:`${'3.'.green} listar Tareas Completadas`,
            },
            {
                value:'4',
                name:`${'4.'.green} Listar  Tareas Pendientes`,
            },
            {
                value:'5',
                name:`${'5.'.green} Completar Tarea(s)`,
            },
            {
                value:'6',
                name:`${'6.'.green} Borrar Tarea`,
            },
            {
                value:'0',
                name:`${'0.'.green} Salir\n`
            }
        ]
    }
]


// main menu
const inquirerMenu = async() => {

    console.clear();
    console.log('==============================='.green);
    console.log(' Seleccione Una Opcion '.white);
    console.log('===============================\n'.green);

    const {opcion} = await inquirer.prompt(question);

    return opcion;
}

// setar valor
const setInput = async (message) =>{

    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate: function (value) {
                if (value.length === 0) {
                    return `Please enter a valid ${message}`;
                }

                return true;
              }
        }
    ];

   console.log('\n');
   const {desc} = await inquirer.prompt(question);

    return desc;
}


// subemnu borrar
const deleteMenu = async ( tasks = [] ) => {

    const choices = tasks.map( (task,i) => {

       const idx = `${i+1}`.green

       return {
            value:task.id,
            name:`${idx}.${task.desc}`,
        }

    });

    choices.unshift({
        value:'0',
        name:`${0}.`.green+'Volver al Menu'
    });

    const question = [
        {
            type:'list',
            name:'id',
            message:'¿ Cual desea eliminar ?',
            choices
        }
    ];

    const {id} = await inquirer.prompt(question);

    return id;
}


const showCheckList = async (tasks = []) => {

    const choices = tasks.map( (task) => {
        return {
             value:task.id,
             name:task.desc,
             checked: (task.completedIn) ? true:false
         }
 
     });
 
     choices.unshift({
         value:'0',
         name:`${0}.`.green+'Volver al Menu'
     });
 
     const question = [
         {
             type:'checkbox',
             name:'ids',
             message:'¿ Cual desea completar ?'.green,
             choices
         }
     ];
 
     const {ids} = await inquirer.prompt(question);
     return ids;

}

// comfirm
const confirmed = async (message) => {

    const question = [
        {
            type:'confirm',
            name:'confirm',
            message
        }
    ];

    const {confirm} = await inquirer.prompt(question);

    return confirm;
}

// pausar consola
const pause = async() =>{

    const question = [
        {
            type:'input',
            name:'enter',
            message:`Pulse ${'Enter'.green} para continuar`,
        }
    ];

   console.log('\n');
   await inquirer.prompt(question);

}





module.exports = {
    inquirerMenu,
    setInput,
    deleteMenu,
    showCheckList,
    pause,
    confirmed
    
}