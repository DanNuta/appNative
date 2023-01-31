import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export const CircleButton = (props) => {
  function handlePress() {
    
  }

  return (
    <TouchableOpacity style={[style.heard, { ...props }]} 
                      onPress={handlePress}>
      <Image style={style.image} 
             source={props.img} 
             resizeMode="contain"
              />
    </TouchableOpacity>
  );
};


export const RectButton = (props) => {
  return (
    <TouchableOpacity style={style.rectButton}
                      onPress={props.handlePress}
    >
      <Text style={style.btnRect}>Place a bit</Text>
    </TouchableOpacity>
  )
}



const style = StyleSheet.create({
  heard: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },

  image: {
    width: 24,
    height: 24,
  },

  rectButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    padding: SIZES.small
  },  

  btnRect: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    textAlign: "center"
  }
});
