import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, SHADOWS, assets } from "../constants";

export const NFTTitle = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.subTitle}</Text>
    </View>
  );
};

export const ETHPrice = (props) => {
  return (
    <View style={style.price}>
      <Image source={assets.eth} />
      <Text>{props.price}</Text>
    </View>
  );
};

export const ImageCmp = (props) => {
  return (
    <Image
      style={[
        style.img,
        props.index == 0 ? { marginLeft: 0 } : { marginLeft: -SIZES.font },
      ]}
      source={props.url}
      resizeMode="contain"
    />
  );
};

export const People = (props) => {
  return (
    <View style={style.people}>
      {props.images.map((item, index) => {
        return <ImageCmp key={index} url={item.image} index={index} />;
      })}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View style={style.endDate}>
      <Text>End in</Text>
      <Text>15h</Text>
    </View>
  );
};

export const SubInfo = (props) => {
  return (
    <View style={style.subInfo}>
      <People images={props.data.bids} />
      <EndDate />
    </View>
  );
};


const Contribution = (props) => {
  return (
    <View>
      <Text>{`Bid place by ${props.people}`}</Text>
      <Text>{props.data}</Text>
    </View>
  )
}


export const ContributionPerson = (props) => {
  return (

    <View style={style.contribution}>
      <Image style={style.img} resizeMode="cover" source={props.item.image}/>
      <Contribution data={props.item.date} people={props.item.people}/>
      <ETHPrice price={props.item.price}/>
    </View>
  )
}

const style = StyleSheet.create({
  subInfo: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: SIZES.font,
    alignItems: "center",
    marginTop: -25,
  },

  people: {
    flexDirection: "row",
  },

  img: {
    width: 48,
    height: 48,
  },

  endDate: {
    padding: SIZES.font,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.dark,
    backgroundColor: COLORS.white,
  },

  price: {
    flexDirection: "row",
    alignItems: "center",
  },

  contribution: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SIZES.large
  }
});
