/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable global-require */
if (typeof window !== "undefined") {
    global.window.resizeTo = (width, height) => {
        global.window.innerWidth = width || global.window.innerWidth;
        global.window.innerHeight = height || global.window.innerHeight;
        global.window.dispatchEvent(new Event("resize"));
    };
    global.window.scrollTo = () => {};
    if (!window.matchMedia) {
        Object.defineProperty(global.window, "matchMedia", {
            value: jest.fn((query) => ({
                matches: query.includes("max-width"),
                addListener: () => {},
                removeListener: () => {}
            }))
        });
    }
}

const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });
