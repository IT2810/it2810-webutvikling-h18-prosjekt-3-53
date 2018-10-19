import { StyleSheet, Dimensions } from 'react-native';
import { colors } from 'constants/Colors';

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const padding = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40
}

export const fonts = {
    sm: 12,
    md: 18,
    lg: 28,
    xl: 36
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontSize: fonts.md
    },
    titleText: {
        fontSize: fonts.xl
    },
    steps: {
        fontSize: fonts.md,
        marginTop:20
    },
    info: {
        padding: 20,
    }
});