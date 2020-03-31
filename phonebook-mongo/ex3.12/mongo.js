const mongoose = require('mongoose')


console.log(process.argv.length)
if ( process.argv.length < 3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]


const url = `mongodb+srv://ericlaw02:${password}@cluster0-c8ino.mongodb.net/cli-phonebook?retryWrites=true&w=majority`
  

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  phone: String,
})

const Entries = mongoose.model('Entries', phonebookSchema)


if ( process.argv.length == 5 ) {
    const name = process.argv[3]
    const phone = process.argv[4]

    const entry = new Entries({
      name,
      phone
    })

    entry.save().then(response => {
      console.log('entry saved!')
      mongoose.connection.close()
    })
} else if ( process.argv.length == 3 ) {
    Entries.find({}).then(result => {
      result.forEach(entry => {
        console.log(entry)
      })
      mongoose.connection.close()
    })
}

