(function() {

    var eventLog = document.getElementById('eventLog');
    var HTMLLog = document.getElementById('HTMLLog');

    function escapeHTML(html) {
        return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function inputEventToString(event) {
        var s = 'InputEvent - ';
        ['type', 'inputType', 'data', 'isComposing'].forEach(function(val) {
            s += val + ':<b>' + event[val] + '</b>&nbsp;&nbsp;';
        })
        return s + `getRanges():${event.getRanges()}`;
    }

    document.addEventListener('beforeinput', function(event) {
        eventLog.innerHTML += inputEventToString(event) + '</br>';
    });

    document.addEventListener('input', function(event) {
        HTMLLog.innerHTML = escapeHTML(editor.innerHTML);
    });
    HTMLLog.innerHTML = escapeHTML(editor.innerHTML);

})();
