interface Gender {
    [key: string]: Endings;
}

interface Endings {
    [key: string]: string;
}

interface Genders {
    [key: string]: Gender;
}

const genders: Genders = {
    feminine: {
        genitive: {
            ка: "ки",
            га: "ги",
            ха: "хи",
            ша: "ши",
            жа: "жи",
            а: "ы",
            я: "и",
            ь: "и",
        },
        dative: {
            а: "е",
            ь: "и",
            я: "и",
        },
        accusative: {
            а: "у",
            ь: "ь",
            я: "ю",
        },
        instrumenatal: {
            а: "ой",
            ь: "ью",
            я: "ей",
        },
        prepositional: {
            а: "е",
            ь: "и",
            я: "е",
        },
    },

    masculine: {
        genitive: {
            й: "я",
            ь: "я",
            zero: "а",
        },
        dative: {
            а: "е",
            й: "ю",
            ь: "ю",
            zero: "у",
        },
        accusative: {
            а: "у",
            й: "я",
            ь: "я",
            я: "ю",
            zero: "а",
        },
        instrumenatal: {
            а: "ой",
            й: "ем",
            ь: "ем",
            я: "ей",
            zero: "ом",
        },
        prepositional: {
            ий: "ии",
            й: "е",
            а: "е",
            zero: "е",
        },
    },

    neutral: {
        genitive: {
            е: "я",
            о: "а",
        },
        dative: {
            е: "ю",
            о: "у",
        },
        accusative: {},
        instrumenatal: {
            е: "ем",
            о: "ом",
        },
        prepositional: {
            ие: "ии",
            е: "е",
            о: "е",
        },
    },
};

export const defineEnging = (word: string, gender: string, wordCase: string) => {
    const selectedCase = genders[gender][wordCase];

    if ((gender === "neutral" && wordCase === "accusative") || wordCase === "nominative") {
        return word;
    }

    for (let key in selectedCase) {
        if (word.endsWith(key)) {
            return word.slice(0, word.length - key.length) + selectedCase[key];
        } else if (gender === "masculine") {
            return word + selectedCase.zero;
        }
    }
};
