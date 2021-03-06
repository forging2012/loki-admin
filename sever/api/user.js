/*
* restful api 用户接口汇总
*/

const user = require('../controllers/user')
const Router = require('koa-router')


const router = new Router()

router.get('/user', user.userList)
router.get('/info', user.userInfo)
router.post('/register',user.userRegister)
router.post('/login',user.userLogin)

module.exports = router