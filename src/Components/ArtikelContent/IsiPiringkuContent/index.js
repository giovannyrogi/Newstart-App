import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import { MakananPokok, LaukPauk, BuahBuahan, SayurSayuran } from '../../../../assets'

const IsiPiringkuContent = () => {


    return (
        <View style={styles.container}>
            <View style={styles.IsiPiringkuContentStyle}>
                <Text style={styles.textStyle}>
                    Isi Piringku adalah sebuah pedoman yang dibuat oleh pemerintah Indonesia untuk
                    memberi pemahaman kepada seluruh masyarakat Indonesia tentang pentingnya
                    mengkonsumsi makanan sehat dengan gizi yang seimbang. Isi Piringku berisi informasi
                    mengenai bagaimana cara penyajian setiap porsi makanan yang baik dan benar agar
                    dapat memperoleh gizi yang seimbang. Dalam Isi Piringku cara penyajian makanan
                    dalam satu porsi piring terbagi menjadi empat bagian yaitu makanan
                    pokok, lauk-pauk, sayur-sayuran dan buah-buahan.
                </Text>
            </View>
            <View style={styles.subJudulContainer}>
                <Text style={styles.subJudul}>Makanan Pokok</Text>
                <Text style={styles.textStyle}>
                    Makanan pokok adalah pangan yang mengandung karbohidrat
                    dan sering dikonsumsi oleh masyarakat Indonesia sejak lama.
                    Makanan pokok ini beragam seperti beras, jagung, singkong, ubi, sagu.
                    Termasuk juga produk olahan yaitu roti, pasta, mie dan lain-lain.
                    <Text style={{ fontFamily: 'Roboto-Bold' }}> Menurut Isi piringku sajian makanan
                    pokok dalam satu porsi piring hanya 2/3 dari 1/2 piring saja</Text>. Untuk lebih jelasnya silahkan lihat gambar dibawah ini.
                </Text>


                <View style={{ marginTop: 15 }}>
                    <Text style={styles.textCubitStyle} >Cubit gambar untuk zoom in/out</Text>
                    <ImageZoom
                        cropWidth={330}
                        cropHeight={280}
                        imageWidth={330}
                        imageHeight={280}
                    >
                        <Image
                            style={styles.stretch}
                            source={MakananPokok}
                        />
                    </ImageZoom>
                </View>
            </View>

            <View style={styles.subJudulContainer}>
                <Text style={styles.subJudul}>Lauk-pauk</Text>
                <Text style={styles.textStyle}>
                    Lauk-pauk adalah sumber pangan protein yang terbagi menjadi dua yaitu
                    protein hewani dan protein nabati. Kedua protein ini masing-masing mempunyai
                    kelebihan dan kekurangannya. Protein hewani mempunyai asam amino yang lebih lengkap
                    dan mudah untuk diserap oleh tubuh, hanya saja kekurangannya jumlah kolesterol
                    dan lemak jenuh dalam protein hewani lebih tinggi serta harganya relatif lebih mahal.
                    Sedangkan protein nabati keunggulannya adalah kandungan lemak tak jenuhnya lebih tinggi
                    dari pada protein hewani dan terdapat kandungan isoflavon dimana kandungan ini
                    tidak ada dalam protein hewani.
                    <Text style={{ fontFamily: 'Roboto-Bold' }}> Untuk sajian lauk-pauk dalam satu porsi
                    piring dianjurkan hanya 1/3 dari 1/2 piring.</Text> Lihat gambar dibawah ini untuk lebih
                    detailnya.
                </Text>
                <View>
                    <Text style={styles.textCubitStyle} >Cubit gambar untuk zoom in/out</Text>
                    <ImageZoom
                        cropWidth={330}
                        cropHeight={300}
                        imageWidth={330}
                        imageHeight={300}
                    >
                        <Image
                            style={styles.gambarLaukPauk}
                            source={LaukPauk}
                        />
                    </ImageZoom>
                </View>
            </View>

            <View style={styles.subJudulContainer}>
                <Text style={styles.subJudul}>Buah-buahan</Text>
                <Text style={styles.textStyle}>
                    Buah-buahan memiliki banyak manfaat bagi tubuh manusia, mengkonsumsi buah-buahan
                    dapat mencegah kanker dan dapat menjadi salah satu cara untuk menghilangkan
                    jerawat dengan alami. Manfaat lain dari buah-buahan adalah sumber berbagai
                    vitamin(vit A, B, B1, B6, C), sumber air dan gizi, sumber antioxidan,
                    dapat mencegah penyakit tertentu dan dapat menjadi obat untuk digunakan
                    diluar tubuh seperti bisul atau jerawat.
                <Text style={{ fontFamily: 'Roboto-Bold' }}> Untuk sajian buah-buahan dalam satu
                    porsi piring yaitu 1/3 dari 1/2 piring</Text>. untuk lebih jelasnya silahkan
                    liat gambar dibawah ini.
                </Text>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.textCubitStyle} >Cubit gambar untuk zoom in/out</Text>
                    <ImageZoom
                        cropWidth={330}
                        cropHeight={330}
                        imageWidth={330}
                        imageHeight={330}
                    >
                        <Image
                            style={styles.gambarBuahBuahan}
                            source={BuahBuahan}
                        />
                    </ImageZoom>
                </View>
            </View>

            <View style={styles.subJudulContainer}>
                <Text style={styles.subJudul}>Sayur-sayuran</Text>
                <Text style={styles.textStyle}>
                    Sayur-sayuran merupakan bahan pangan berasal dari tumbuhan dan memiliki
                    kandungan air yang tinggi. Sayur-sayuran dapat di konsumsi langsung atau dimasak
                    seperti direbus, dikukus dan ditumis. Dengan mengkonsumsi sayur-sayuran dapat
                    membuat hidup Anda lebih sehat dan dapat melindungi Anda dari berbagai jenis
                    penyakit. Manfaat dari sayur-sayuran yaitu, mencegah dan mengurangi stress berlebih,
                    memperlancar buang air besar, mencegah penyakit jantung / kanker, mempertahankan
                    berat badan yang seimbang dan lain-lain. <Text style={{ fontFamily: 'Roboto-Bold' }}>
                        Untuk sajian sayur-sayuran dalam satu porsi piring adalah 2/3 dari 1/2 piring.
                    </Text> Lihat gambar dibawah ini untuk lebih jelasnya.
                </Text>

                <View>
                    <Text style={styles.textCubitStyle} >Cubit gambar untuk zoom in/out</Text>
                    <ImageZoom
                        cropWidth={330}
                        cropHeight={330}
                        imageWidth={330}
                        imageHeight={330}
                    >
                        <Image
                            style={styles.gambarSayurSayuran}
                            source={SayurSayuran}
                        />
                    </ImageZoom>
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

    subJudulContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },

    subJudul: {
        fontFamily: 'Poppins-Bold',
        marginTop: 20,
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
        color: '#9B51E0',
        textAlign: 'center'
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

    gambarLaukPauk: {
        width: 330,
        height: 300,
    },

    gambarBuahBuahan: {
        width: 330,
        height: 330,
    },

    gambarSayurSayuran: {
        width: 330,
        height: 330,
    },

    textCubitStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto-Bold',
        marginBottom: 2,
        color: '#00796B',
        letterSpacing: 1,
    },
})