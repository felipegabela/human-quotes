/* eslint-disable import/extensions */
/** Here we define our API endpoints for the corresponding
 *  component and assign the controller methods to them.
 *  Moreover we can do things like authorization (e.g. JWT),
 *  permission validation (e.g. ACL) or add component
 *  specific middleware. */

import express from 'express';
import QuoteHandler from './controller.js';

const router = express.Router();

router.get('/random', QuoteHandler.get.randomQuote);

export default router;
