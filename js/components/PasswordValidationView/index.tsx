import React from "react";
import styles from "./styles";
import { View } from "react-native";
import { FlatList } from "react-native";
import passwordValidations from "../../screens/ForgotPasswordFlow/SetPassword/passwordValidations";
import CheckmarkWithLabel from "../CheckmarkWithLabel";

function PasswordValidatorView() {

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#F7F8F9',
            marginHorizontal: 30,
            top: 4,
            borderBottomRightRadius: 16,
            borderBottomLeftRadius: 16,
            height: 138
        }}>

            <FlatList
                bounces={false}
                style={styles.validationOptions}
                data={passwordValidations}
                renderItem={({ item }) => <CheckmarkWithLabel item={item} />}
            >
                
            </FlatList>
        </View>
    );
}
export default (PasswordValidatorView);



// Pre Requisites to do this: 

// make same UI.
// take the data everytime the state changes 
// make a fucntion that checks the condition
// make a enum of the error cases 
// check which kind of error case matches the text
// then it will display the text and box red 
// and else all the boxes has to be green