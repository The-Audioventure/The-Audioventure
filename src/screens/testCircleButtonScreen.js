import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ShadowPropTypesIOS,
  Alert,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";
import TextBanner from "../components/TextBanner";
import ViewContainer from "../components/ViewContainer";

// borderWidth: props.borderWidth,
//       borderColor: props.borderColor,
//       backgroundColor: props.backgroundColor,
//       width: props.width,
//       height: props.height,
//       borderRadius: 3,
//       justifyContent: "center",
//       flexWrap: "wrap",
//       overflow: "hidden",
//       // paddingHorizontal: '3%',
//       alignItems: "center",
//       opacity: 1,
export default class testCircleButtonScreen extends React.Component {
  render() {
    return (
        <ViewContainer color="black" height="100%" width="100%">
            {/* <TouchableOpacity onPress={()=>Alert("button pressed")} style={{height: 500, width: 500, borderRadius: 500, backgroundColor: 'red'}} >

            </TouchableOpacity> */}

            <TextBanner fontColor="#ffffff"
              borderColor="#b4a7d6"
              backgroundColor="#8e7cc380">

            </TextBanner>
        </ViewContainer>
    )
  }
}
