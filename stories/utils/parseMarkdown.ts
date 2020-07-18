// import marked from "marked";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const marked: any = require("marked");
import { LANGUAGES_IN_PROGRESS } from "./constants";
import prism from "../utils/prism";
import textToHash from "./textToHash";

const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
const descriptionRegExp = /<p class="description">(.*)<\/p>[\r\n]/;
const headerKeyValueRegExp = /(.*): (.*)/g;
const emptyRegExp = /^\s*$/;
export const demoRegexp = /^"demo": "(.*)"/;

interface Headers {
    [T: string]: string | string[];
}

const externs = ["https://www.w3.org/"];

/**
 * For instance, the following input:
 *
 * ---
 * title: Backdrop React Component
 * components: Backdrop
 * ---
 *
 * should output:
 * { title: 'Backdrop React Component', components: ['Backdrop'] }
 */

export const getHeaders = (markdown: string) => {
    const hasHeader = markdown.match(headerRegExp);
    if (!hasHeader) {
        return {
            components: []
        };
    }
    const header = hasHeader[1];

    let regexMatches: RegExpExecArray | null;

    const headers: Headers = {};

    while ((regexMatches = headerKeyValueRegExp.exec(header)) !== null) {
        headers[regexMatches[1]] = regexMatches[2];
    }

    if (headers.components) {
        headers.components = (headers.components as string)
            .split(",")
            .map((x) => x.trim())
            .sort();
    } else {
        headers.components = [];
    }

    return headers;
};

export const getContents = (markdown: string) => {
    return markdown
        .replace(headerRegExp, "") // Remove header information
        .split(/^{{("demo":[^}]*)}}$/gm) // Split markdown into an array, separating demos
        .filter((content) => !emptyRegExp.test(content)); // Remove empty lines
};

export const getTitle = (markdown: string) => {
    const matches = markdown.match(titleRegExp);

    if (!matches || !matches[1]) {
        throw new Error("Missing title in the page");
    }

    return matches[1];
};

export const getDescription = (markdown: string) => {
    const matches = markdown.match(descriptionRegExp);

    return matches?.[1];
};

interface PrePareMarkdownProps {
    pageFilename: string;
    requireRaw: __WebpackModuleApi.RequireContext;
}

/**
 * Render markdown
 *
 * @param {string} markdown
 * @param {object} [options]
 * @param {function} [options.highlight] - https://marked.js.org/#/USING_ADVANCED.md#highlight
 * @param {object} [options.rest] - properties from https://marked.js.org/#/USING_PRO.md#renderer
 */
export function render(markdown: string, options: any = {}) {
    const { highlight, ...rendererOptions } = options;

    const renderer = Object.assign(new marked.Renderer(), rendererOptions);

    const markedOptions = {
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        highlight,
        renderer
    };
    return marked(markdown, markedOptions);
}

export const prepareMarkdown = (config: PrePareMarkdownProps) => {
    const { pageFilename, requireRaw } = config;

    const demos: any = {};
    const docs: any = {};

    console.log({ pageFilename });

    requireRaw.keys().forEach((filename) => {
        if (filename.indexOf(".md") !== -1) {
            const match = filename.match(/-([a-z]{2})\.md$/);

            const userLanguage =
                match && LANGUAGES_IN_PROGRESS.indexOf(match[1]) !== -1 ? match[1] : "zh";

            const markdown: string = requireRaw(filename).default;
            const headers = getHeaders(markdown);
            const contents = getContents(markdown);

            const title = headers.title || getTitle(markdown);
            const description = headers.description || getDescription(markdown);

            const headingHashes: any = {};
            // const toc: any = [];

            const rendered = contents.map((content) => {
                if (demos && demoRegexp.test(content)) {
                    try {
                        return JSON.parse(`{${content}}`);
                    } catch (err) {
                        console.error("JSON.parse fails with: ", `{${content}}`);
                        console.error(err);
                        return null;
                    }
                }

                return render(content, {
                    highlight: prism,
                    heading: (headingText: any, level: any) => {
                        // Small title. No need for an anchor.
                        // It's reducing the risk of duplicated id and it's fewer elements in the DOM.
                        if (level >= 4) {
                            return `<h${level}>${headingText}</h${level}>`;
                        }

                        const hash = textToHash(headingText, headingHashes);

                        /**
                         * create a nested structure with 2 levels starting with level 2 e.g.
                         * [{...level2, children: [level3, level3, level3]}, level2]
                         */
                        // if (level === 2) {
                        //     toc.push({
                        //         text: headingText,
                        //         level,
                        //         hash,
                        //         children: []
                        //     });
                        // } else if (level === 3) {
                        //     if (!toc[toc.length - 1]) {
                        //         throw new Error(`Missing parent level for: ${headingText}`);
                        //     }

                        //     toc[toc.length - 1].children.push({
                        //         text: headingText,
                        //         level,
                        //         hash
                        //     });
                        // }

                        return [
                            `<h${level}>`,
                            `<a class="anchor-link" id="${hash}"></a>`,
                            headingText,
                            `<a class="anchor-link-style" aria-hidden="true" aria-label="anchor" href="#${hash}">`,
                            '<svg><use xlink:href="#anchor-link-icon" /></svg>',
                            "</a>",
                            `</h${level}>`
                        ].join("");
                    },
                    link: (href: any, linkTitle: any, linkText: any) => {
                        let more = "";

                        if (externs.some((domain) => href.indexOf(domain) !== -1)) {
                            more = ' target="_blank" rel="noopener nofollow"';
                        }

                        let finalHref = href;

                        if (
                            userLanguage !== "en" &&
                            finalHref.indexOf("/") === 0 &&
                            finalHref !== "/size-snapshot"
                        ) {
                            finalHref = `/${userLanguage}${finalHref}`;
                        }

                        return `<a href="${finalHref}"${more}>${linkText}</a>`;
                    }
                });
            });

            console.log({ rendered });
            // fragment link symbol
            rendered.unshift(`<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
        <symbol id="anchor-link-icon" viewBox="0 0 16 16">
          <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
        </symbol>
      </svg>`);

            const localized = { description, rendered, /* toc, */ title };

            docs[userLanguage] = localized;
        } else if (filename.indexOf(".tsx") !== -1) {
            const demoName = `pages/${pageFilename}/${filename
                .replace(/\.\//g, "")
                .replace(/\.tsx/g, ".js")}`;

            demos[demoName] = {
                ...demos[demoName],
                moduleTS: filename,
                rawTS: requireRaw(filename)
            };
        } else {
            const demoName = `pages/${pageFilename}/${filename.replace(/\.\//g, "")}`;

            demos[demoName] = {
                ...demos[demoName],
                module: filename,
                raw: requireRaw(filename)
            };
        }
    });

    return { demos, docs };
};
