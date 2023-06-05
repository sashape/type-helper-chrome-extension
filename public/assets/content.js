// const host = 'https://type.1291053-ck68557.tw1.ru/api';
if (typeof host === undefined) {
    const host = 'http://';

}
const flag = ':';
let command = '';
let prompt = '';
let inputElement;
let inputValue;
document.addEventListener('input', function(e) {

    inputElement = e.target;
    inputValue = inputElement.innerText || inputElement.value;

    injectElement(inputElement, 'loader');

    const loader = document.getElementById('loader');
    // console.log('Введенный текст:', inputValue);
    // loaderContainer.append(loader);
    // inputElement.append(loaderContainer);

    if (inputValue.startsWith(flag)) {
        // Извлекаем команду
        command = inputValue.substring(flag.length).split(" ")[0];

        // Извлекаем текст prompt
        prompt = inputValue.substring(flag.length + command.length + 1);
        switch(command) {
            case 'gen':
                loader.style.display = 'block'
                break;
        }
    }
    console.log(command, prompt)
    // clearTimeout(typingTimer);
    // typingTimer = setTimeout(request(command, prompt), 500);
    // typingTimer = setTimeout(() => {
    //     request()
    // }, 3000);

});
function addEvents(e) {
    e.addEventListener('click', async (el) => {
        console.log(el.target)
        if (el.target.id === 'loader') {
            el.target.className = 'loader load';
            // let response = await request(command, prompt);
            // console.log(response)
            // if (response?.ok) {
            //     inputElement.innerText = response.prompt
            // }
            await request(command, prompt)
                .then(response => {
                    if(response?.ok) {
                        console.log(inputElement)
                        let tw = inputElement.querySelector('[data-text="true"]');
                        if(tw !== null) {
                            tw.tabIndex = 0;
                            tw.focus();
                            tw.innerText = response.message

                            // tw.setSelectionRange(inputElement.innerText.length, inputElement.innerText.length);
                        } else {
                            inputElement.textContent = response.message
                            inputElement.setSelectionRange(inputValue.length, inputValue.length);
                        }

                    }
                    // console.log(response);
                    // console.log(response.message)
                    // console.log(response.message.command)
                    // console.log(response.message.prompt)
                })

        }
    })
}
async function request(command, prompt) {
    let res = {};
    const url = "http://localhost:5000/prompt";
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ command: command, prompt: prompt }),
    };
    await fetch(url, params)
        .then(response => response.json())
        .then(data => {
            res = {...res, ...data};
        })
        .catch(error => {
            res = error;
        });
    return res;
}
function injectCSS(css) {
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}
function injectElement(element, name) {
    let el = document.getElementsByClassName(name + '-container');
    console.log(el, Object.keys(el).length);
    if(Object.keys(el).length === 0) {
        fetch(chrome.runtime.getURL(`assets/${name}.html`))
            .then(response => response.text())
            .then(html => {
                const container = document.createElement('div');
                container.className = name + '-container';
                container.innerHTML = html;
                element.appendChild(container);
                addEvents(container);
            });
    }

}

