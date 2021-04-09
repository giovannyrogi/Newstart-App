const initialState = {
    uid: '',

    resultIsiPiringku: 0,
    resultCaloriMakanPagi: 0,
    resultCaloriMakanSiang: 0,
    resultCaloriMakanMalam: 0,
    resultAllCalories: 0,
    resultNutrisi: 0,

    resultOlahraga: 0,
    resultAir: 0,
    resultSinarMatahari: 0,
    resultPengendalianDiri: 0,
    resultUdaraSegar: 0,
    resultTidur: 0,
    resultHubunganDgnTuhan: 0,
    resultHatiSenang: 0,

    resultNewstart: 0,
    getSelectedDate: '',

    goodHealthGlobal: '',
    goodHealthGlobal: '',
    goodHealthGlobal: '',
    goodHealthGlobal: '',
    goodHealthGlobal: '',
    goodHealthGlobal: '',

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
        case 'RESULT_ISI_PIRINGKU':
            return {
                ...state,
                resultIsiPiringku: action.value,

            }
        case 'RESULT_OLAHRAGA':
            return {
                ...state,
                resultOlahraga: action.value,

            }
        case 'RESULT_AIR':
            return {
                ...state,
                resultAir: action.value,
            }
        case 'RESULT_SINAR_MATAHARI':
            return {
                ...state,
                resultSinarMatahari: action.value,
            }
        case 'RESULT_PENGENDALIAN_DIRI':
            return {
                ...state,
                resultPengendalianDiri: action.value,
            }
        case 'RESULT_UDARA_SEGAR':
            return {
                ...state,
                resultUdaraSegar: action.value,
            }
        case 'RESULT_TIDUR':
            return {
                ...state,
                resultTidur: action.value,
            }
        case 'RESULT_HATI_SENANG':
            return {
                ...state,
                resultHatiSenang: action.value,
            }
        case 'RESULT_HUB_DGN_TUHAN':
            return {
                ...state,
                resultHubunganDgnTuhan: action.value,
            }
        case 'RESULT_NUTRISI':
            return {
                ...state,
                resultNutrisi: action.value,
            }
        case 'RESULT_NEWSTART':
            return {
                ...state,
                resultNewstart: action.value,
            }
        case 'SELECTED_DATE':
            return {
                ...state,
                getSelectedDate: action.value,
            }
        default:
            return state;

    }

}

export default reducer;