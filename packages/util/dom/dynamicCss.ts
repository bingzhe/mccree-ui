export function updateCss(css: string) {
    console.log(css);
    const styleNode = document.createElement("style");
    styleNode.innerHTML = css;

    const head = document.querySelector("head");
    console.log(head);

    head.appendChild(styleNode);
}
