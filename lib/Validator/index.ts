interface Rule {
    required?: boolean;
    min?: number;
    max?: number;
}

interface Rules {
    [k: string]: Array<Rule>;
}

function Schema(descriptor: Rules) {
    // this.rules = null;
    // this.define(descriptor);
}

Schema.prototype = {
    define(rules: Rules) {
        if (!rules) {
            throw new Error("Cannot configure a schema with no rules");
        }
        if (typeof rules !== "object" || Array.isArray(rules)) {
            throw new Error("Rules must be an object");
        }
        this.rules = {};

        let z;
        let item;

        for (z in rules) {
            if (rules.hasOwnProperty(z)) {
                item = rules[z];
                this.rules[z] = Array.isArray(item) ? item : [item];
            }
        }
    }
};

export default Schema;