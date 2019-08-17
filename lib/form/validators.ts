interface Validators {
    [k: string]: () => void;
}

const validators: Validators = {
    string: () => { },
    number: () => { },
    boolean: () => { },
    regexp: () => { },
    array: () => { },
    required: () => { }
};

export default validators;