import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ShadowPropTypesIOS,
} from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

const styles = (props) =>
  StyleSheet.create({
    style: {
      justifyContent: "center",
      backgroundColor: props.color,
      alignItems: "center",
      height: props.height,
      width: props.width,
    },
  });

const nudge = (props) =>
  StyleSheet.create({
    style: {
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      right: props.right,
    },
  });

const horizontal = (props) =>
  StyleSheet.create({
    style: {
      justifyContent: "flex-start",
      flexDirection: "row",
    },
  });

const apart = (props) =>
  StyleSheet.create({
    style: {
      justifyContent: "space-between",
    },
  });

const start = (props) =>
StyleSheet.create({
  style: {
    justifyContent: "flex-start",
  },
});

const round = (props) =>
  StyleSheet.create({
    style: {
      borderRadius: props.radius,
    },
  });

export default class ViewContainer extends React.Component {
  render() {
    var viewStyle = styles(this.props).style;
    // console.log(this.props)
    if (this.props.nudge) {
      // console.log('nudge!')
      viewStyle = StyleSheet.compose(viewStyle, nudge(this.props).style);
    }
    if (this.props.horizontal) {
      viewStyle = StyleSheet.compose(viewStyle, horizontal(this.props).style);
    }
    if (this.props.apart) {
      viewStyle = StyleSheet.compose(viewStyle, apart(this.props).style);
    }
    if (this.props.start) {
      viewStyle = StyleSheet.compose(viewStyle, start(this.props).style)
    }
    if (this.props.radius) {
      viewStyle = StyleSheet.compose(viewStyle, round(this.props).style);
    }

    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={this.props.onPress} style={viewStyle}>
          {this.props.children}
        </TouchableOpacity>
      );
    } else {
      return <View style={viewStyle}>{this.props.children}</View>;
    }
  }
}
