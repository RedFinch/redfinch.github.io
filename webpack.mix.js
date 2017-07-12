let mix = require('laravel-mix');
const project = require('./project.config');

/**
 * Configure project root directories
 */
mix.setPublicPath(project.paths.public());

/**
 * Compile sass files
 */
project.sass.files.forEach((file) => {
    let srcPath = `${project.sass.src}/${file}`;
    let destPath = `${project.sass.dest}/${file.replace(/\.(sass|scss)$/, '.css')}`;

    mix.sass(srcPath, destPath);
});

/**
 * Compile JS files
 */
project.js.files.forEach((file) => {
    let srcPath = `${project.js.src}/${file}`;
    let destPath = `${project.js.dest}/${file}`;

    mix.js(srcPath, destPath);
});

/**
 * Code splitting / autoloading
 */
if(project.js.autoload.length > 0) {
    mix.autoload(project.js.autoload);
}

if(project.js.vendors.length > 0) {
    mix.extract(project.js.vendors);
}

/**
 * Configure live reloading using BrowserSync
 */
if (project.options.browserSync) {
    mix.browserSync({
        url: project.url,
        notifications: project.options.notifications
    });
}

/**
 * Toggle hashed URLs
 */
if (project.options.cacheBusting) {
    mix.version();
}

/**
 * Toggle source maps for debug mode
 */
if (project.options.sourceMaps) {
    mix.sourceMaps();
}

/**
 * Disable system notifications
 */
if (!project.options.notifications) {
    mix.disableNotifications();
}
