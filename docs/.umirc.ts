import { defineConfig } from "dumi";
import path from "path";

export default defineConfig({
    // more config: https://d.umijs.org/config
    title: "mccree-ui",
    favicon:
        "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
    logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
    outputPath: "docs-dist",
    resolve: {
        // 配置 dumi 嗅探的文档目录
        includes: ["mdx", "demo"]
    },
    webpack5: {},

    chainWebpack: (memo) => {
        // 设置 alias
        // https://github.com/umijs/dumi/issues/151
        memo.resolve.alias.set(
            "mccree-ui/components",
            path.join(__dirname, "../packages/components")
        );

        memo.module.rule("js").include.add(path.join(__dirname, "../packages")).end();
    },
    styles: [
        `/** Logo Style **/
        // .__dumi-default-menu-header .__dumi-default-menu-logo{
        //   background: none !important;
        // }
        .circles {
          width: 64px;
          height: 64px;
          position: relative;
          perspective: 50000px;
          color: #2c89a0;
        }
        .circles span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: block;
          width: 18.4%;
          height: 18.4%;
          border-radius: 100%;
          background: currentColor;
        }
        .circles div {
          position: absolute;
          width: 100%;
          height: 100%;
          border-left: 0.4vmin solid;
          border-top: 0.4vmin solid transparent;
          border-radius: 100%;
        }
        .circles div:nth-child(1) {
          -webkit-animation: anim-1 1s linear infinite;
                  animation: anim-1 1s linear infinite;
        }
        .circles div:nth-child(2) {
          -webkit-animation: anim-2 1s linear infinite;
                  animation: anim-2 1s linear infinite;
        }
        .circles div:nth-child(3) {
          -webkit-animation: anim-3 1s linear infinite;
                  animation: anim-3 1s linear infinite;
        }
    
        @-webkit-keyframes anim-1 {
          from {
            transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
          }
          to {
            transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
          }
        }
    
        @keyframes anim-1 {
          from {
            transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
          }
          to {
            transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
          }
        }
        @-webkit-keyframes anim-2 {
          from {
            transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
          }
          to {
            transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
          }
        }
        @keyframes anim-2 {
          from {
            transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
          }
          to {
            transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
          }
        }
        @-webkit-keyframes anim-3 {
          from {
            transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
          }
        }
        @keyframes anim-3 {
          from {
            transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
          }
        }
        `
    ]
});
