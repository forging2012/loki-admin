/*
* restful api
*/

const Router = require('koa-router')
const article = require('../controllers/article')

const router = new Router()

router.get('/author', article.authorArticle)
router.post('/write',article.writeArticle)
router.get('/article',article.getArticle)
router.get('/one',article.getOneArticle)
router.delete('/delete',article.DeleteOneArticle)
router.post('/update',article.updateArticle)

module.exports = router