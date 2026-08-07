// speech.js by xFaN
// this library uses built-in api speech.

(function(global) {
    'use strict';
    
    let synth = window.speechSynthesis;
    let currentText = '';
    let rate = 1.0;
    let pitch = 1.0;
    let volume = 1.0;
    
    (function warmUp() {
        if (!synth) return;
        let warm = new SpeechSynthesisUtterance('');
        warm.volume = 0;
        synth.speak(warm);
    })();
    
    function speechSetText(text) {
        currentText = String(text);
    }
    
    function speechSetRate(newRate) {
        rate = parseFloat(newRate) || 1.0;
    }
    
    function speechSetPitch(newPitch) {
        pitch = parseFloat(newPitch) || 1.0;
    }
    
    function speechSetVolume(newVolume) {
        volume = parseFloat(newVolume) || 1.0;
    }
    
    function speechStart() {
        if (!synth) {
            console.error('Speech synthesis не поддерживается.');
            return;
        }
        if (!currentText) {
            console.warn('Нет текста для озвучки.');
            return;
        }
        
        synth.cancel();
        
        let utterance = new SpeechSynthesisUtterance(currentText);
        utterance.lang = 'ru-RU';
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.volume = volume;
        
        synth.speak(utterance);
    }
    
    function speechStop() {
        if (synth) {
            synth.cancel();
        }
    }
    
    function speechGetText() {
        return currentText;
    }
    
    global.speechSetText = speechSetText;
    global.speechSetRate = speechSetRate;
    global.speechSetPitch = speechSetPitch;
    global.speechSetVolume = speechSetVolume;
    global.speechStart = speechStart;
    global.speechStop = speechStop;
    global.speechGetText = speechGetText;
    
})(window);