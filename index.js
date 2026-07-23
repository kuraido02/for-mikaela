function goTo(destination){
    window.location.href = destination.url;
}

const mainPage = {
    'Click': {url: "message.html"}
};

function navigateTo(section){
    goTo(mainPage[section]);
}