import shevchenko, { GrammaticalGender } from 'shevchenko';

async function inGenitive(givenName: string, patronymicName: string, familyName: string) {
    const input = {
        gender: GrammaticalGender.MASCULINE,
        givenName, //: 'Тарас',
        patronymicName, //: 'Григорович',
        familyName, //: 'Шевченко'
    };

    return await shevchenko.inGenitive(input);
}

async function inDative(givenName: string, patronymicName: string, familyName: string) {
    const input = {
        gender: GrammaticalGender.MASCULINE,
        givenName, //: 'Тарас',
        patronymicName, //: 'Григорович',
        familyName, //: 'Шевченко'
    };

    return await shevchenko.inDative(input);
}

async function inAccusative(givenName: string, patronymicName: string, familyName: string) {
    const input = {
        gender: GrammaticalGender.MASCULINE,
        givenName, //: 'Тарас',
        patronymicName, //: 'Григорович',
        familyName, //: 'Шевченко'
    };

    return await shevchenko.inAccusative(input);
}

export default {
    inGenitive,
    inDative,
    inAccusative,
};