import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  onPress,
} from "react-native";
import React from "react";
import { assets, COLORS, FONTS, SHADOWS, SIZES } from "../constants";
import { useLinkProps } from "@react-navigation/native";

export const HomeHeader = (props) => {

  function handleSearch(value){
    props.onSearch(value)
  }

  return (
    <View style={style.container}>
      <View style={style.logo}>
        <Image
          style={style.logoImg}
          resizeMode="contain"
          source={assets.logo}
        />
        <View style={style.avatar}>
          <Image
            style={style.avatar}
            resizeMode="contain"
            source={assets.person01}
          />
          <Image
            style={style.badge}
            resizeMode="contain"
            source={assets.badge}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={style.welcome}>Hello Victoria 🦊</Text>
        <Text style={style.masterpiece}>Let's find a masterpiece</Text>
      </View>

      <View style={style.search}>
        <View>
          <Image
            style={style.searchImg}
            resizeMode="contain"
            source={assets.search}
          />
        </View>
        <TextInput
          style={style.input}
          placeholder="Search"
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.font,
  },

  logo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoImg: {
    width: 90,
    height: 25,
  },

  avatar: {
    width: 45,
    height: 45,
  },

  avatarImg: {
    width: "100%",
    height: "100%",
  },

  badge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 15,
    height: 15,
  },

  welcome: {
    color: COLORS.white,
  },

  masterpiece: {
    marginTop: SIZES.base,
    color: COLORS.white,
  },

  searchImg: {
    width: 20,
    height: 20,
    marginRight: SIZES.font,
  },

  search: {
    borderRadius: SIZES.small - 5,
    backgroundColor: COLORS.gray,
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    color: COLORS.white,
  },
});
