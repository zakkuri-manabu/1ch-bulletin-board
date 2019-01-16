var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/indexController')
var message_controller = require('../controllers/messageController')

/* GET home page. */
router.get('/', index_controller.index_list);

router.get('/message/detail/:id', message_controller.message_detail_get)

router.get('/message/create', message_controller.message_create_get)

router.post('/message/create', message_controller.message_create_post)

router.get('/message/edit/:id', message_controller.message_edit_get)

router.post('/message/edit/:id', message_controller.message_edit_post)

router.get('/message/delete/:id', message_controller.message_delete_get)

router.post('/message/delete/:id', message_controller.message_delete_post)

module.exports = router;
