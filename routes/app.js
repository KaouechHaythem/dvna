var router = require('express').Router()
var appHandler = require('../core/appHandler')
var authHandler = require('../core/authHandler')

module.exports = function (){
	router.get('/',authHandler.isAuthenticated,function(req,res){
		res.redirect('/learn')
	})

    router.get('/usersearch',authHandler.isAuthenticated,function(req,res){
        res.render('app/usersearch',{output: null})
    })

    router.get('/ping',authHandler.isAuthenticated,function(req,res){
        res.render('app/ping',{output: null})
    })

    router.get('/products',authHandler.isAuthenticated,appHandler.listProducts)

    router.get('/modifyproduct',authHandler.isAuthenticated,appHandler.modifyProduct)   

    router.get('/useredit',authHandler.isAuthenticated,appHandler.userEdit)

    router.get('/calc',authHandler.isAuthenticated,function (req,res){
        res.render('app/calc')
    })

    router.get('/admin',authHandler.isAuthenticated,function(req,res){
        res.render('app/admin',{admin: (req.user.role=='admin')})
    })

    router.get('/admin/api/users',authHandler.isAuthenticated, appHandler.listUsersAPI)

    router.get('/redirect',appHandler.redirect)

    router.post('/usersearch',authHandler.isAuthenticated, appHandler.userSearch)

    router.post('/ping',authHandler.isAuthenticated, appHandler.ping)

    router.post('/products',authHandler.isAuthenticated, appHandler.productSearch)

    router.post('/modifyproduct',authHandler.isAuthenticated, appHandler.modifyProductSubmit)

    router.post('/useredit',authHandler.isAuthenticated,appHandler.userEditSubmit)

    router.post('/calc',authHandler.isAuthenticated,appHandler.calc)

	return router
}
