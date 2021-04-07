const initialState = {
    uid: '',
    resultIsiPiringku: 0,
    resultCaloriMakanPagi: 0,
    resultCaloriMakanSiang: 0,
    resultCaloriMakanMalam: 0,
    resultAllCalories: 0,
    sumNutrisi: 0,
    sumOlahraga: 0,
    sumAir: 0,
    sumSinarMatahari: 0,
    sumPengendalianDiri: 0,
    sumUdaraSegar: 0,
    sumTidur: 0,
    sumHubunganDgnTuhan: 0,
    sumHatiSenang: 0,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_UID':
            return {
                ...state,
                uid: action.value,
            }
        case 'SUM_CALORIES_MKN_PAGI':
            return {
                ...state,
                resultCaloriMakanPagi: action.value,

            }
        case 'SUM_CALORIES_MKN_SIANG':
            return {
                ...state,
                resultCaloriMakanSiang: action.value,

            }
        case 'SUM_CALORIES_MKN_MALAM':
            return {
                ...state,
                resultCaloriMakanMalam: action.value,

            }
        case 'SUM_ALL_CALORIES':
            return {
                ...state,
                resultAllCalories: action.value,

            }
        case 'ISI_PIRINGKU':
            return {
                ...state,
                resultIsiPiringku: action.value,

            }
        default:
            return state;

    }

}

export default reducer;