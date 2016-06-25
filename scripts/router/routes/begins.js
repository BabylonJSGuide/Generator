
// ************************************************* REQUIRE *************************************************

var express = require('express'),
    fs = require('fs'),
    router = express.Router(),
    path = require('path'),
    appRoot = require('app-root-path').path,
    logger = require(path.join(appRoot, 'config/logger'));

// ************************************************* CLASSES *************************************************


/**
 * Show the begins list
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
    res.sendFile('./begins.html', options);
});

router.get('/:begin', function(req, res){
    var options = {
        root: path.join(appRoot, 'public/html')
    };

    var begin = req.params.begin;

    fs.exists(path.join('public/html/begins/', begin +'.html'), function (exists) {
        if (exists) {
            res.status(200);
            res.set({
                'Cache-Control': 'no-cache',
                'Content-type':'text/html'
            });
            res.sendFile('./begins/'+ begin +'.html', options);
        } else {
            res.status(404).render('errorpages/404');
        }
    });
});

module.exports = router;


// ************************************************* FUNCTIONS *************************************************
