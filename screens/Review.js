import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { assets, COLORS, SHADOWS, SIZES, FONTS } from "../constants";
import {
  FocusedStatus,
  CircleButton,
  RectButton,
  DetailsDesc,
  DetailsBil,
} from "../components";

import {
  ImageCmp,
  EndDate,
  ETHPrice,
  SubInfo,
  NFTTitle,
  ContributionPerson,
} from "../components/SubInfo";

import React from "react";

export const Review = (props) => {
  const { item } = props.route.params;
  const { navigation } = props;

  const [text, setText] = useState(`${item.description.substring(0, 100)}...`);
  const [read, setRead] = useState(false);

  function prevScreen() {
    navigation.goBack();
  }

  function heart() {
    console.log("heart");
  }

  function readMoreFn() {
    setRead((prev) => !prev);
  }

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.backroundImage}>
          <Image style={style.images} source={item.image} />
        </View>

        <CircleButton
          top={10}
          left={10}
          handlePress={prevScreen}
          img={assets.left}
        />

        <CircleButton
          top={10}
          right={10}
          handlePress={heart}
          img={assets.heart}
        />

        <View style={style.description}>
          <SubInfo data={item} />

          <View style={style.authorPrice}>
            <NFTTitle title={item.creator} subTitle={item.name} />
            <ETHPrice price={item.price} />
          </View>

          <View style={style.desShort}>
            <Text>Description</Text>
            <Text style={{ marginTop: SIZES.base }}>
              {read
                ? item.description
                : `${item.description.substring(0, 100)}...`}
              <Text onPress={readMoreFn}>
                {read ? `Read Less` : "Read More"}
              </Text>
            </Text>
          </View>

          <View style={style.bids}>
            <Text>Curent Bits</Text>

            <View>
              {item.bids.map((item, index) => {
                return <ContributionPerson key={index} item={item} />;
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  backroundImage: {
    width: "100%",
    height: 350,
  },
  images: {
    width: "100%",
    height: "100%",
  },

  description: {
    marginHorizontal: SIZES.font,
  },

  peopleLike: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: -30,
  },

  likeArt: {
    flexDirection: "row",
  },

  authorPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: SIZES.large * 2,
  },

  desShort: {
    marginTop: SIZES.extraLarge * 2,
  },

  bids: {
    marginTop: SIZES.extraLarge,
  },
});
