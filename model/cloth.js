import mongoose from 'mongoose'

const clothSchema = mongoose.Schema({
  style: String,
  amount: String,
  clothImg: String,
  clothImgURL: String,
  description: String
}
)

export default mongoose.model('Cloth', clothSchema)