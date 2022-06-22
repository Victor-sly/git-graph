const rawReplaceState = window.history.replaceState;
window.history.replaceState = function(...args) {
    rawReplaceState.apply(window.history, args)
    console.log('======replaceState======')
}