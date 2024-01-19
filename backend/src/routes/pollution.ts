import { Router } from 'express';
import * as controller from '@controllers/pollution.controller';

export const pollutionRouter = Router();

pollutionRouter.get('/all', controller.getPollution);
