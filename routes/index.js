var express = require('express');
var router = express.Router();

// 引入自定义的controller
const IndexController = require('../controllers/index');
/* GET home page. */
router.get('/', IndexController.getList);      // 定义首页路由
router.post ('/add', IndexController.add);      // 定义提交表单路由
module.exports = router;
