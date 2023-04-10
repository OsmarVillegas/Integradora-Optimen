import { Router } from "express";
import * as eventosCtrl from "../controllers/Eventos.controllers";

const router= Router();
import { authJwt } from "../middlewares";

router.post('/', authJwt.verifyToken,eventosCtrl.createEventos);

router.get('/', eventosCtrl.findAllEventos);

router.get('/:id',eventosCtrl.findOneEvento);

router.delete('/:id', authJwt.verifyToken,eventosCtrl.deleteEvento);

router.put('/:id', authJwt.verifyToken,eventosCtrl.updateEvento);



export default router;