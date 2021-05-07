const initialState = {
    //untuk menampung user id
    uid: '',

    //untuk menampung hasil perhitungan nutrisi
    resultIsiPiringku: 0,
    resultCaloriMakanPagi: 0,
    resultCaloriMakanSiang: 0,
    resultCaloriMakanMalam: 0,
    resultAllCalories: 0,
    resultNutrisi: 0,

    // untuk menyimpan data makan pagi
    selectedFoodMknPagi: [],
    selectedCaloriMknPagi: [],
    selectedPorsiMknPagi: [],
    hasilCaloriMknPagi: 0,

    //untuk menyimpan data makan siang
    selectedFoodMknSiang: [],
    selectedCaloriMknSiang: [],
    hasilCaloriMknSiang: 0,

    //untuk menyimpan data makan malam
    selectedFoodMknMalam: [],
    selectedCaloriMknMalam: [],
    hasilCaloriMknMalam: 0,

    //untuk menampung hasil perhitungan seluruh newstart test
    resultOlahraga: 0,
    resultAir: 0,
    resultSinarMatahari: 0,
    resultPengendalianDiri: 0,
    resultUdaraSegar: 0,
    resultTidur: 0,
    resultHubunganDgnTuhan: 0,
    resultHatiSenang: 0,

    //menampung hasil akhir dari seluruh newstart test
    resultNewstart: 0,

    // state uji coba
    getSelectedDate: '',

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
        case 'SELECTED_CALORI_MKN_PAGI':
            return {
                ...state,
                selectedCaloriMknPagi: action.value,
            }
        case 'SELECTED_FOOD_MKN_PAGI':
            return {
                ...state,
                selectedFoodMknPagi: action.value,
            }
        case 'SELECTED_PORSI_MKN_PAGI':
            return {
                ...state,
                selectedPorsiMknPagi: action.value,
            }
        case 'HASIL_CALORI_MKN_PAGI':
            return {
                ...state,
                hasilCaloriMknPagi: action.value,
            }
        case 'SELECTED_CALORI_MKN_SIANG':
            return {
                ...state,
                selectedCaloriMknSiang: action.value,
            }
        case 'SELECTED_FOOD_MKN_SIANG':
            return {
                ...state,
                selectedFoodMknSiang: action.value,
            }
        case 'HASIL_CALORI_MKN_SIANG':
            return {
                ...state,
                hasilCaloriMknSiang: action.value,
            }
        case 'SELECTED_CALORI_MKN_MALAM':
            return {
                ...state,
                selectedCaloriMknMalam: action.value,
            }
        case 'SELECTED_FOOD_MKN_MALAM':
            return {
                ...state,
                selectedFoodMknMalam: action.value,
            }
        case 'HASIL_CALORI_MKN_MALAM':
            return {
                ...state,
                hasilCaloriMknMalam: action.value,
            }
        default:
            return state;

    }

}

export default reducer;