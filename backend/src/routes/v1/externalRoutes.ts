import { Router } from 'express';
import * as vehicleController from '@/api/v1/external/vehicle/controller';

const router = Router();

router.get('/vehicle', vehicleController.listHandler);
router.get('/vehicle/filters', vehicleController.filtersHandler);

export default router;
