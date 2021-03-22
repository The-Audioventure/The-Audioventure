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

const styles = (props) =>
  StyleSheet.create({
    default: {
      borderColor: props.borderColor,
      backgroundColor: props.backgroundColor,
      width: props.width,
      height: props.height,
      borderRadius: 3,
      justifyContent: "center",
      flexWrap: "wrap",
      overflow: "hidden",
      borderWidth: props.borderWidth,
    },
  });

export default class Banner2 extends React.Component {
  render() {
    var viewStyle = styles(this.props).default;
    if (this.props.noBackground) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { backgroundColor: "clear" } }.style)
      );
    }

    if (this.props.noTop) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderTopWidth: 0 } }.style)
      );
    }
    if (this.props.noBottom) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderBottomWidth: 0 } }.style)
      );
    }
    if (this.props.noBorder) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderWidth: 0 } }.style)
      );
    }
    if (this.props.corners) {
      viewStyle = StyleSheet.compose(
        viewStyle,
        StyleSheet.create({ style: { borderRadius: 0 } }.style)
      );
    }

    if (this.props.touchable) {
      return (
        <TouchableOpacity style={viewStyle}>
          <ViewContainer height="100%" width="100%">
            {this.props.children}
          </ViewContainer>
        </TouchableOpacity>
      );
    } else {
      return <View style={viewStyle}>{this.props.children}</View>;
    }
  }
}
