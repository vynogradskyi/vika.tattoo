import { Router } from 'express'
import { show, getImage } from './controller'

const router = new Router()

/**
 * @api {get} /images/:id Retrieve images
 * @apiName RetrieveImages
 * @apiGroup Images
 * @apiSuccess {Object} images Images's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Images not found.
 */
router.get('/:type',
  show)

router.get('/:type/:filename',
  getImage)

export default router
