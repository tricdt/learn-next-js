import mongoose from 'mongoose'

const connectDB = async () => {
   if (mongoose.connections[0].readyState) {
      console.log('Already connected.')
      return
   }
   await mongoose.connect(
      'mongodb://localhost:27017/SalaElectronics',
      {
         useCreateIndex: true,
         useFindAndModify: false,
         useNewUrlParser: true,
         useUnifiedTopology: true,
      },
      (err) => {
         if (err) throw err
         console.log('Connected to mongodb.')
      }
   )
}

export default connectDB
