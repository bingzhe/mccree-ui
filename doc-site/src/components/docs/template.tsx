import React from "react";

import { Box } from "../../../../components/index";
import { Layout } from "../Layout";

const Template: React.FC = () => {
    return (
        <Layout>
            <Box
                as="main"
                background="url(/wall.jpg) 50% center / cover no-repeat fixed"
                padding={{ xs: "0", sm: "3.6rem 3rem" }}
                width="100vw"
                height="100vh"
                display="flex"
                justifyContent="space-between"
                overflow="hidden"
            >
                111
            </Box>
        </Layout>
    );
};

export default Template;