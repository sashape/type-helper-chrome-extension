document.addEventListener('input', function(e) {
    console.log('input')
    console.log(e.target.value)
    // Check if the event target is an input element
    if (e.target.nodeName === 'INPUT') {
        // Do something with the input element, e.g. log its value
        console.log('Input value changed to:', event.target.value);
    }
});