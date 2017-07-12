'use strict';

document.addEventListener('DOMContentLoaded', function () {

    // Toggles
    var $burgers = getAll('.burger');

    if ($burgers.length > 0) {
        $burgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    // Functions
    function getAll(selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
    }

});
