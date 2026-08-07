// xclip by xFaN

(function(global) {
    'use strict';

    const xclip = {
        _text: '',

        copy: function(text) {
            this._text = text;
            this._exec();
            return this;
        },

        _exec: function() {
            const textarea = document.createElement('textarea');
            textarea.value = this._text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            
            try {
                document.execCommand('copy');
                console.log('Скопировано.');
            } catch (err) {
                console.warn('Ошибка копирования');
            }
            
            document.body.removeChild(textarea);
        },

        date: function(format) {
            const d = new Date();
            if (format === 'time') return d.toLocaleTimeString('ru-RU');
            if (format === 'full') return d.toLocaleString('ru-RU');
            return d.toLocaleDateString('ru-RU');
        },

        time: function() {
            return new Date().toLocaleTimeString('ru-RU');
        },

        from: function(selector) {
            const el = document.querySelector(selector);
            return el ? (el.value || el.innerText || '') : '';
        },

        storage: function(key) {
            return localStorage.getItem(key) || '';
        },

        random: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        url: function() {
            return window.location.href;
        },

        title: function() {
            return document.title;
        }
    };

    global.xclip = xclip;

})(window);