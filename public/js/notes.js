const fs = require('fs')
const chalk = require('chalk')



const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const getNotes = function () {
    const notes = loadNotes();
    dataJSON = JSON.stringify(notes);
    objArray = JSON.parse(dataJSON);
     for(var myKey in objArray) {
         console.log("key:"+myKey+", name==:"+objArray[myKey].title+"  Body====  "+objArray[myKey].body);
      }
    return 'Your notes...'
}
const ReadNotes = function (id) {
    const notes = loadNotes();
    dataJSON = JSON.stringify(notes);
    objArray = JSON.parse(dataJSON);
    const user = objArray.find((user) => user.title === id)
    console.log(user)


    // console.log("id========   "+id+"     "+objArray.length);

    //  if( id <objArray.length) 
    //  {
    //     console.log("id========  111 "+id+"     "+objArray.length);
    //      console.log("key:"+id+", name==:"+objArray[id].title+"  Body====  "+objArray[id].body);
    //  }
    //  else
    //  {
    //     console.log("Not Exist!!!!");
    //  }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    ReadNotes: ReadNotes
}