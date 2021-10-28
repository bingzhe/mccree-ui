export function updateCss(css: string) {
    const styleNode = document.createElement("style");
    styleNode.innerHTML = css;

    const head = document.querySelector("head");
    console.log(head);

    head.appendChild(styleNode);
}
