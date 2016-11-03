
// ************************************************* REQUIRE *************************************************

var express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));

// ************************************************* CLASSES *************************************************


/**
 * Show the gamelets list
 */
router.get('/', function(req, res) {
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    res.status(200);
    res.set({
        'Cache-Control': 'no-cache',
        'Content-type':'text/html'
    });
    res.sendFile('./gamelets.html', options);
});

router.get('/:gamelets', function(req, res){
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    var gamelets = req.params.gamelets;

    fs.exists(path.join('public/html/gamelets/', gamelets +'.html'), function (exists) {
        if (exists) {
            res.status(200);
            res.set({
                'Cache-Control': 'no-cache',
                'Content-type':'text/html'
            });
            res.sendFile('./gamelets/'+ gamelets +'.html', options);
        } else {
            res.status(404).render('errorpages/404');
        }
    });
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
