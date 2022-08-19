import mongoose from 'mongoose'

const connectDB = async () => {
   if (mongoose.connections[0].readyState) {
      console.log('Already connected.')
      return
   }
   await mongoose.connect(
      'mongodb://localhost:27017/SalaElectronics',
      {
         useNewUrlParser: true, // <-- no longer necessary
         useUnifiedTopology: true, // <-- no longer necessary
      },
      (err) => {
         if (err) throw err
         console.log('Connected to mongodb.')
      }
   )
}

export default connectDB
