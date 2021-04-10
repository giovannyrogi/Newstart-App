import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import { MakananPokok } from '../../../../assets'

const IsiPiringkuContent = () => {


    return (
        <View style={styles.container}>
            <View style={styles.IsiPiringkuContentStyle}>
                <Text style={styles.textStyle}>
                    Isi Piringku adalah sebuah pedoman yang dibuat oleh pemerintah Indonesia untuk
                    memberi pemahaman kepada seluruh masyarakat Indonesia tentang pentingnya
                    mengkonsumsi makanan sehat dengan gizi yang seimbang. Isi Piringku berisi informasi
                    mengenai bagaimana cara penyajian setiap porsi makanan yang baik dan benar agar dapat
                    memperoleh gizi yang seimbang. Dalam Isi Piringku cara penyajian makanan dalam 1 porsi piring terbagi
                    menjadi 4 bagian yaitu makanan pokok, lauk-pauk, sayur-sayuran dan buah-buahan.
                </Text>
            </View>
            <View style={styles.makananPokokContainer}>
                <Text style={styles.subJudul}>Makanan Pokok</Text>
                <Text style={styles.textStyle}>
                    Makanan pokok adalah pangan yang mengandung karbohidrat
                    dan sering dikonsumsi oleh masyarakat Indonesia sejak lama.
                    Makanan pokok ini beragam seperti beras, jagung, singkong, ubi, sagu.
                    Termasuk juga produk olahan yaitu roti, pasta, mie dan lain-lain.
                    Menurut Isi piringku sajian makanan pokok dalam 1 porsi piring hanya
                    2/3 dari 1/2 piring. Untuk lebih jelasnya silahkan lihat gambar dibawah ini.
                </Text>

                <View style={{ marginTop: 15 }}>
                    <Image
                        style={styles.stretch}
                        source={MakananPokok}
                    />
                </View>
            </View>
        </View>
    )
}

export default IsiPiringkuContent;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,

    },

    IsiPiringkuContentStyle: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    makananPokokContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    subJudul: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
        color: '#9B51E0',
    },

    textStyle: {
        fontFamily: 'Roboto-Regular',
        textAlign: 'justify',
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
    },

    stretch: {
        width: 330,
        height: 280,
    },
})