import shevchenko, { GrammaticalGender } from 'shevchenko';

async function inAccusative(givenName: string, patronymicName: string, familyName: string) {
    const input = {
        gender: GrammaticalGender.MASCULINE,
        givenName, //: 'Тарас',
        patronymicName, //: 'Григорович',
        familyName, //: 'Шевченко'
    };

    return await shevchenko.inAccusative(input);
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

export default {
    inAccusative,
    inDative,
};