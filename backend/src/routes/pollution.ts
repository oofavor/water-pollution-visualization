import { Router } from 'express';
import * as controller from '@controllers/pollution.controller';

export const pollutionRouter = Router();

pollutionRouter.get('/all', controller.getPollution);
pollutionRouter.get('/groupped', controller.getGrouppedPollution);
pollutionRouter.get('/pollutionPerSubject', controller.getMaxPollutionPerSubjects);
pollutionRouter.get('/pollutionByYear', controller.getPollutionByYear);
pollutionRouter.get('/coords', controller.getPollutionCoords);
pollutionRouter.get('/riverPollution', controller.getRiverPollution);