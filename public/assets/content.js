document.addEventListener('input', function(e) {
    const matches = e.target.value.match(/(::\S+) (.*)$/);
    const command = matches?.[1];
    const prompt = matches?.[2];
    switch(command) {
        case '::gen':
            console.log('make gen');
            console.log(prompt);
    }
});