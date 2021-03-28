import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

const TakaranAir = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec at vehicula dui. Sed accumsan nisl lectus,
                    id feugiat sapien blandit id. Donec mollis tristique odio.
                    Aliquam vel dui tristique, feugiat dui et, pretium velit.
                    Nam condimentum nisl id aliquet vulputate. Donec pellentesque leo lorem,
                    non aliquam nisi euismod quis. Nam sit amet odio at risus imperdiet accumsan.
                    Aliquam eu eros vitae nibh fringilla porta. Proin finibus sapien mi,
                    sed tempor justo accumsan sit amet. Suspendisse pharetra neque in ligula
                    dignissim tincidunt. Fusce scelerisque rutrum augue a consequat.
                    Cras dui orci, sodales et nulla at, rhoncus congue ex. Pellentesque ante dolor,
                    bibendum vel dolor sed, porttitor dapibus leo. Suspendisse ac lectus orci.
                    Nulla sit amet lectus eu nisi pellentesque finibus blandit eget sapien.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec at vehicula dui. Sed accumsan nisl lectus,
                    id feugiat sapien blandit id. Donec mollis tristique odio.
                    Aliquam vel dui tristique, feugiat dui et, pretium velit.
                    Nam condimentum nisl id aliquet vulputate. Donec pellentesque leo lorem,
                    non aliquam nisi euismod quis. Nam sit amet odio at risus imperdiet accumsan.
                    Aliquam eu eros vitae nibh fringilla porta. Proin finibus sapien mi,
                    sed tempor justo accumsan sit amet. Suspendisse pharetra neque in ligula
                    dignissim tincidunt. Fusce scelerisque rutrum augue a consequat.
                    Cras dui orci, sodales et nulla at, rhoncus congue ex. Pellentesque ante dolor,
                    bibendum vel dolor sed, porttitor dapibus leo. Suspendisse ac lectus orci.
                    Nulla sit amet lectus eu nisi pellentesque finibus blandit eget sapien.
                </Text>
            </View>

        </SafeAreaView>
    )
}

export default TakaranAir;

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 15,
        letterSpacing: 1,
        lineHeight: 22,
        marginHorizontal: 20,
    }
})