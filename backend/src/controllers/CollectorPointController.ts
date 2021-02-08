import { Request, Response } from 'express'

import CollectorPoint from '../schemas/CollectorPoint'

class CollectorPointController {
  public async index (req: Request, res: Response): Promise<Response> {
    const city = req.body

    const collectorPoints = await CollectorPoint.find({ city: city })

    return res.json(collectorPoints)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const collectorPoint = await CollectorPoint.create(req.body)

    return res.json(collectorPoint)
  }
}

export default new CollectorPointController()
