export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    options: {
        storySort: {
            order: ["通用", "布局", "数据录入", "数据展示", "反馈", "工具", "hooks", "实验室"]
        }
    }
};
