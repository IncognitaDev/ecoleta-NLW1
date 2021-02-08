import { Schema, model, Document } from 'mongoose'

interface ICollectorPoint extends Document{
  _id: string,
  name: string,
  adress: string,
  numComp: string,
  state: string,
  city: string
}

const CollectorPointSchema = new Schema({
  _id: { type: String },
  name: { type: String, required: true },
  adress: { type: String, required: true },
  numComp: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true }
}, {
  timestamps: true
})

export default model<ICollectorPoint>('CollectorPoint', CollectorPointSchema)
