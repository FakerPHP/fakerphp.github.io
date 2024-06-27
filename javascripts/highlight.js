// Add a custom event listener, dispatched by Material for MkDocs.
// <https://github.com/squidfunk/mkdocs-material/blob/master/src/assets/javascripts/integrations/instant/index.ts#L247>
document.addEventListener('DOMContentSwitch', () => {
    // Reset the "called" boolean
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
});

hljs.initHighlightingOnLoad();
