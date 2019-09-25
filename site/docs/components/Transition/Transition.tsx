import * as React from "react";
import { Transition, Box } from "../../../../lib/index";

const TransitionExample: React.FC = () => {
    const [visible1, setVisible1] = React.useState(false);

    const handleVisibleToggle = () => {
        setVisible1(v => !v);
    };
    return (
        <>
            <Box>
                <button onClick={handleVisibleToggle}>toggle</button>
                <Box display="flex">
                    <Transition visible={visible1} type="grow">
                        <Box
                            display="inline-block"
                            width={50}
                            height={50}
                            margin={2}
                            backgroundColor="standard.dark2"
                        />
                    </Transition>
                </Box>
            </Box>
        </>
    );

};

export default TransitionExample;