const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como compoletado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}