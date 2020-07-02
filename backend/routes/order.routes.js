const express = require('express');
const { check } = require('express-validator')
const authorize = require('../middlewares/authorize')
const router = express.Router();

const ControllerCreateOrder = require('../controllers/order/createOrder')
const ControllerReadSeveralOrders = require('../controllers/order/readSeveralOrder')
const ControllerReadOneOrder = require('../controllers/order/readOneOrder')
const ControllerInProcessOrder = require('../controllers/order/processOrder')
const ControllerUpdateOrder = require('../controllers/order/updateOrder')
const ControllerDeleteOrder = require('../controllers/order/deleteOrder')
const ControllerSendOrder = require('../controllers/order/sendOrder')
const ControllerCancelOrder = require('../controllers/order/cancelOrder')
const ControllerSearchOrderUser = require('../controllers/order/searchOrderUser')
const ControllerCompletedOrder = require('../controllers/order/completedOrder')
const ControllerScoreOrder = require('../controllers/order/scoreOrder')

router.post('/',authorize(['user','admin']), [  
     
    check('quantity', 'Cantidad vacia').notEmpty(),
    check('amountTopay', 'Cantidad a Abonar Vacio').notEmpty(),
    check('address', 'Direccion esta Vacio').notEmpty(),

],

ControllerCreateOrder.CreateOrder)
router.post('/:id/puntaje',authorize(['user','admin']), [  
     
    check('score', 'Score vacia').notEmpty(),

],

ControllerScoreOrder.scoreOrder)

router.get('/',authorize('admin'), ControllerReadSeveralOrders.seeOrders)
router.get('/:id',authorize('admin'), ControllerReadOneOrder.getOrder)
router.get('/user/:id',authorize(['user', 'admin']), ControllerSearchOrderUser.searchOrder)

router.put('/:id/finalizado',authorize('admin'), ControllerCompletedOrder.completedOrder)
router.put('/:id/cancelar',authorize('admin'), ControllerCancelOrder.cancelOrder) 
router.put('/:id/enviar',authorize('admin'), ControllerSendOrder.sendOrder)
router.put('/:id/ep',authorize('admin'), ControllerInProcessOrder.processOrder)
router.put('/:id',authorize(['user', 'admin']), ControllerUpdateOrder.modifyOrder)

router.delete('/:id',authorize('admin'), ControllerDeleteOrder.DeleteOrder)

module.exports = router;