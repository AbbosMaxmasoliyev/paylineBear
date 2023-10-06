export const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_NUMBER':
            return { formattedNumber: action.payload };


        case "FIRST_NAME":
            return { firstName: action.payload };
        case "LAST_NAME":
            return { lastName: action.payload };
        default:
            return state;
    }
};

const initialState = {
    formattedText: "",
};

export function cardFormattedNumber(son) {
    let number = son.replace(/[^\d]/g, "");
    let text = "";

    if (number.length <= 4) {
        text = `${number}`;
    } else if (number.length <= 8) {
        text = `${number.slice(0, 4)} ${number.slice(4)}`;
    } else if (number.length <= 12) {
        text = `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8)}`;
    } else if (number.length <= 17) {
        text = `${number.slice(0, 4)} ${number.slice(4, 8)} ${number.slice(8, 12)} ${number.slice(12)}`;
    }

    return text;
}