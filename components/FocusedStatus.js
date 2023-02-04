import { View, Text } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "react-native";

export const FocusedStatus = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar animated={true} backgroundColor={props.backgroundColor} />
  ) : null;
};
