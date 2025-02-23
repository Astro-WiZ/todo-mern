import mongoose from 'mongoose'

const connectDb = async (url: string): Promise<void> => {
  try {
    await mongoose.connect(url)
    // console.log('MongoDb Connected')
  } catch (err) {
    console.error('Connection Failed', err)
  }
}

export default connectDb
