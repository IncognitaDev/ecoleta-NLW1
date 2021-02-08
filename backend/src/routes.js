import { Router } from 'express'

import CollectorPointController from './controllers/CollectorPointController'

const routes = Router()

routes.get('/collectorPoint', CollectorPointController.index)
routes.post('/collectorPoint', CollectorPointController.create)

export default routes
