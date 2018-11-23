import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /infos/:id Retrieve info
 * @apiName RetrieveInfo
 * @apiGroup Info
 * @apiSuccess {Object} info Info's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Info not found.
 */
router.get('/',
  show)

export default router
