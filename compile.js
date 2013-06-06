
var fs       = require('fs'),
    path     = require('path'),
    walk     = require('walk'),
    optimist = require('optimist'),
    less     = require('less');

var files  = [];
var walker = walk.walk(__dirname+'/public/css_src/', { followLinks: false });
var argv   = optimist.argv;


function lessRender (code, file, dest) {
    var parser = new(less.Parser)({
        paths: [__dirname+'/public/css_src']
    });

    console.log('Compiling '+file+'..');

    parser.parse(code, function (err, tree) {
        if (err) { return console.error(err) }

        var css = tree.toCSS({ yuicompress: true });
        fs.writeFile(__dirname+'/public/css/'+file+'.css', css, function(err) { // for Production
            if (err) {
                console.log(err);
            } else {
                console.log('The compressed CSS file was saved at ['+__dirname+'/public/css/'+file+'.css]');
            }
        });

        if (dest != 'both') {
            return;
        }

        var css = tree.toCSS();
        fs.writeFile(__dirname+'/public/css_src/'+file+'.css', css, function(err) { // for Development
            if (err) {
                console.log(err);
            } else {
                console.log('The CSS file was saved at ['+__dirname+'/public/css_src/'+file+'.css]');
            }
        });
    });
} // lessRender


walker.on('file', function(root, stat, next) {
    if (path.basename(stat.name) != 'lib.less' && path.extname(stat.name) == '.less') {
        files.push(root + stat.name);
    }
    next();
}).on('end', function() {
    console.log('LESS files to compile');

    files.forEach(function(file){
        console.log(' - '+file);
    });
    files.forEach(function(file){
        lessRender(fs.readFileSync(file, encoding='utf8'), path.basename(file, path.extname(file)), argv._[0]);
    });
});