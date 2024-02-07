import React, { useState } from "react";
import { Image, Text, SafeAreaView, View, FlatList } from "react-native";
import { ImageName } from "../../assets";
import styles from "./styles";
import LandingPgInfoScroll from "../../components/LandingScreenInfo";
import landingSlides from "./landingSlides";
import Dot from "../../components/Dot";
import Touchables from "../../primitives/TouchableOpacity";
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import metrics from "../../themes/metrics";
import { H1, H6 } from "../../primitives/Text";
import TouchableOpacityWithImage from "../../primitives/TouchableWithImage";
import { ScreenNames } from "../../navigators/screenNames";

function LandingScreen({ navigation }) {
    console.log('Rendering Landing Screen.')
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                style={{ marginLeft: 0, width: metrics.screenWidth, marginBottom: 0 }}
                isVisible={modalVisible}
                onTouchCancel={toggleModal}
                animationInTiming={700}
                onBackButtonPress={toggleModal}
                onBackdropPress={toggleModal}
                animationIn={'bounceInUp'}
                onSwipeComplete={() => setModalVisible(false)}>
                <View style={styles.bottomModal}>
                    <View style={{ margin: 30, flex: 1, flexDirection: 'column' }}>
                        <H1 style={styles.socialHeading}>Login with Social Media</H1>
                        <TouchableOpacityWithImage
                            {...styles.socialMediaTouchable}
                            children={'Login with Google'}
                            imageSource={ImageName.googleIcon}
                            imageStyle={styles.socialIcons}
                            isImageLeft={true}
                            textStyle={styles.socialloginTouchableTitle}
                            onPress={() => {
                                console.log('tapped')
                            }}
                        ></TouchableOpacityWithImage>
                        <TouchableOpacityWithImage
                            {...styles.socialMediaTouchable}
                            children={'Login with Facebook'}
                            imageSource={ImageName.fbIcon}
                            imageStyle={styles.socialIcons}
                            isImageLeft={true}
                            textStyle={styles.socialloginTouchableTitle}
                            onPress={() => {
                                console.log('tapped')
                            }}
                        ></TouchableOpacityWithImage>
                        <TouchableOpacityWithImage
                            {...styles.socialMediaTouchable}
                            children={'Login with Apple'}
                            imageSource={ImageName.appleIcon}
                            imageStyle={styles.socialIcons}
                            isImageLeft={true}
                            textStyle={styles.socialloginTouchableTitle}
                            onPress={() => {
                                console.log('tapped')
                            }}
                        ></TouchableOpacityWithImage>
                    </View>
                </View>
            </Modal>
            <Image
                style={styles.headingImg}
                source={ImageName.splashImg}>
            </Image>
            <View style={styles.pageControlBg}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    style={styles.pageControlBg}
                    data={landingSlides}
                    onMomentumScrollEnd={(event) => {
                        const index = Math.floor(
                            Math.floor(event.nativeEvent.contentOffset.x) /
                            Math.floor(event.nativeEvent.layoutMeasurement.width));
                        setCurrentSlideIndex(index);
                    }}
                    renderItem={({ item }) => <LandingPgInfoScroll item={item} />
                    }
                />
            </View>
            <View style={styles.pageControl}>
                <FlatList
                    horizontal
                    pagingEnabled
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    bounces={false}
                    data={landingSlides}
                    renderItem={({ item, index }) => <Dot data={item} isSelected={index === currentSlideIndex} />
                    }
                />
            </View>
            <Touchables
                onPress={toggleModal}
                titleStyle={styles.mediaTouchableTitle}
                {...styles.mediaTouchable}
                title="Login with Social Media">
            </Touchables>
            <View style={styles.touchableSeperatorBg}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FFFFFF', '#E5EBF5']} style={{ height: 2, width: 140, marginRight: 10 }} />
                <H6>or</H6>
                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#FFFFFF', '#E5EBF5']} style={{ height: 2, width: 140, marginLeft: 10 }} />
            </View>
            <Touchables
                disabled={false}
                titleStyle={styles.loginTouchableTitle}
                onPress={() => {
                    navigation.navigate(ScreenNames.Login)
                }}
                {...styles.loginTouchable}
                title='Login'>
            </Touchables>
            <View style={styles.touchableSeperatorBg}>
                <H6 style={{ color: '#7F879A' }}>Create an account ?</H6>
                <Touchables
                    titleStyle={styles.signupTouchableTitle}
                    {...styles.signupTouchable}
                    title='Signup'>
                </Touchables>
            </View>
        </SafeAreaView >
    );
};

export default LandingScreen;