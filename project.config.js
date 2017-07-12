const path = require('path');

const project = {
    url: 'redfinch.github.local',

    path_base: __dirname,
    dir_public: './',
    dir_resources: 'resources',

    output: {},

    options: {}
};

function base() {
    const args = [project.path_base].concat([].slice.call(arguments));
    return path.resolve.apply(path, args)
}

project.paths = {
    base: base,
    public: base.bind(null, project.dir_public),
    resources: base.bind(null, project.dir_resources)
};

project.sass = {
    src: project.paths.resources('sass'),
    dest: project.paths.public('assets/css'),
    files: ['global.scss'],
};

project.js = {
    src: project.paths.resources('js'),
    dest: project.paths.public('assets/js'),
    files: ['app.js'],
    vendors: [],
    autoload: {},
};

project.options = {
    browserSync: true,
    cacheBusting: false,
    notifications: true,
    sourceMaps: true
};

module.exports = project;
