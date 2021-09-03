import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ShadowPropTypesIOS,
  ImageBackground,
} from "react-native";
import ViewContainer from "../components/ViewContainer";

import "./unselectable.css";

const styles = (props) =>
  StyleSheet.create({
    scroll: {
      flexWrap: "wrap",
      overflow: "scroll",
      showsVerticalScrollIndicato: false,
    },
    default: {
      borderWidth: props.borderWidth,
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,
      width: props.width,
      height: props.height,
      borderRadius: 3,
      justifyContent: "center",
      flexWrap: "wrap",
      overflow: "hidden",
      // paddingHorizontal: '3%',
      alignItems: "center",
      opacity: 1,
    },
    justLeft: {
      borderWidth: 0,
      borderLeftWidth: props.borderWidth,
      // borderColor: '#b4a7d6',
      // backgroundColor: '#8e7cc3c6',
      width: props.width,
      height: props.height,
      borderRadius: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    noTop: {
      borderWidth: props.borderWidth,
      borderTopWidth: 0,
      // borderColor: '#b4a7d6',
      // backgroundColor: '#8e7cc3c6',
      width: props.width,
      height: props.height,
      borderRadius: 3,
      justifyContent: "center",
      alignItems: "center",
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    noBottom: {
      borderWidth: props.borderWidth,
      borderBottomWidth: 0,
      // borderColor: '#b4a7d6',
      // backgroundColor: '#8e7cc3c6',
      width: props.width,
      height: props.height,
      borderRadius: 3,
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    bottomCorners: {
      borderWidth: props.borderWidth,
      // borderTopWidth: 0,
      // borderBottomWidth: 0,
      // borderColor: '#b4a7d6',
      // backgroundColor: '#8e7cc3c6',
      width: props.width,
      height: props.height,
      borderRadius: 3,
      justifyContent: "center",
      alignItems: "center",
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      flexWrap: "wrap",
      overflow: "hidden",
    },
    corners: {
      borderWidth: props.borderWidth,
      // borderTopWidth: 0,
      // borderBottomWidth: 0,
      // borderColor: '#b4a7d6',
      // backgroundColor: '#8e7cc3c6',
      width: props.width,
      height: props.height,
      borderRadius: 0,
      justifyContent: "center",
      alignItems: "center",
    },
    justBorder: {
      borderWidth: props.borderWidth,
      // borderColor: '#b4a7d6',
      width: props.width,
      height: props.height,
      justifyContent: "center",
      alignItems: "center",
    },
    fontStyle: {
      fontFamily: "PressStart2P_400Regular",
      fontSize: props.fontSize,
      textAlign: "center",
      textAlignVertical: "center",
      color: props.fontColor,
      opacity: 1,
      lineHeight: props.lineHeight,
      userSelect: "none",
    },
  });

export default class TextBanner extends React.Component {
  render() {
    var propStyles = styles(this.props);
    var viewStyle = propStyles.default;
    // console.log(this.props);
    if (this.props.justLeft) {
      viewStyle = StyleSheet.compose(viewStyle, propStyles.justLeft);
    } else if (this.props.noTop) {
      viewStyle = StyleSheet.compose(viewStyle, propStyles.noTop);
    } else if (this.props.noBottom) {
      viewStyle = StyleSheet.compose(viewStyle, propStyles.noBottom);
    } else if (this.props.bottomCorners) {
      viewStyle = StyleSheet.compose(viewStyle, propStyles.bottomCorners);
    } else if (this.props.justBorder) {
      viewStyle = StyleSheet.compose(viewStyle, propStyles.justBorder);
    }

    if (this.props.corners) {
      viewStyle = StyleSheet.compose(viewStyle, propStyles.corners);
    }

    if (this.props.absolute) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { position: "absolute" } }.style)
      );
    }
    if (this.props.noLeft) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderLeftWidth: 0 } }.style)
      );
    }
    if (this.props.noRight) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderRightWidth: 0 } }.style)
      );
    }
    if (this.props.noTop) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderTopWidth: 0 } }.style)
      );
    }

    if (this.props.noBorders) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderWidth: 0 } }).style
      );
    }

    if (this.props.touchable) {
      return (
        <TouchableOpacity onPress={this.props.onPress} style={viewStyle}>
          <ViewContainer height="100%" width="100%">
            <Text style={propStyles.fontStyle}>{this.props.children}</Text>
          </ViewContainer>
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={viewStyle}>
          <Text style={propStyles.fontStyle}>{this.props.children}</Text>
        </View>
      );
    }
  }
}
