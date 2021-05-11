import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DisclaimerContent = () => {
    return (
        <View>
            <View>
                <Text style={styles.judulStyle}>Disclaimer</Text>
                <Text style={styles.textStyle}>
                    Selamat datang di aplikasi Newstart. Dengan menggunakan aplikasi Newstart,
                    berarti Anda telah memberikan persetujuan atas syarat dan ketentuan kami. Jika Anda
                    tidak menyetujui syarat dan ketentuan kami, maka sebaiknya Anda tidak
                    menggunakan aplikasi Newstart. Syarat dan ketentuan dari aplikasi Newstart adalah sebagai berikut.
            </Text>
            </View>
            <View style={{ marginTop: 25 }}>
                <Text style={styles.judulStyle}>Informasi</Text>
                <Text style={styles.textStyle}>
                    Informasi yang tersedia dalam aplikasi Newstart hanya sebatas
                    informasi umum. Semua informasi yang Anda dapatkan dari Aplikasi Newstart
                    bukan menjadi pengganti pratik medis, nasehat kesehatan ataupun
                    diagnosa dari tenaga ahli medis. Oleh sebab itu, untuk mengetahui kondisi
                    kesehatan Anda yang sebenarnya kami tetap menyarankan kepada para
                    pengguna aplikasi Newstart untuk tetap mengunjungi dokter atau
                    tenaga ahli medis untuk berkonsultasi mengenai kondisi kesehatan Anda.
                    Informasi yang Anda dapatkan dari aplikasi Newstart dapat Anda manfaatkan
                    sesuai kebutuhan Anda, tetapi resiko ditanggung oleh Anda sendiri dan
                    kami tidak akan bertanggung jawab.
                </Text>
            </View>
            <View style={{}}>
                <Text style={styles.judulStyle}>Data</Text>
                <Text style={styles.textStyle}>
                    Aplikasi Newstart memiliki hak milik terhadap semua data yang
                    tersimpan di dalamnya. Dengan Anda menggunakan aplikasi ini berarti
                    Anda telah menyetujui dan bertanggung jawab untuk menjaga
                    kerahasiaan akun dan kata sandi Anda sendiri.
                </Text>
            </View>
            <View style={{ marginBottom: 40 }}>
                <Text style={styles.judulStyle}>Aplikasi Mobile</Text>
                <Text style={styles.textStyle}>
                    Aplikasi Newstart terdaftar dan dilindungi oleh hak kekayaan intelektual.
                    Barang siapa yang meniru, menduplikasi ataupun mereka ulang sistem aplikasi
                    mobile Newstart bisa dipidana secara hukum. {'\n'} {'\n'}Aplikasi Newstart adalah aplikasi
                    gratis(tidak berbayar), barang siapa yang memperjual belikan aplikasi ini dapat di pidana
                    secara hukum.
                </Text>
            </View>
        </View>
    )
}

export default DisclaimerContent;

const styles = StyleSheet.create({
    judulStyle: {
        fontSize: 15,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 0.8,
    },
    textStyle: {
        textAlign: 'justify',
        fontFamily: 'Roboto-Regular',
        fontSize: 15,
        letterSpacing: 0.8,
        lineHeight: 20,
        color: 'black'
    },
})
