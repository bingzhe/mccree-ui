import * as React from "react";
import { Navigation, Item } from "../../../../lib/index";

const NavigationExample: React.FC = () => {
    return (
        <div>
            <Navigation>
                <Navigation.Header>header</Navigation.Header>
                <Item>menu1</Item>
                <Item>menu2</Item>
                {/* <Navigation.Footer></Navigation.Footer> */}
            </Navigation>
        </div>
    );
};

export default NavigationExample;