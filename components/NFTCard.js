import { View, Image, StyleSheet } from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { CircleButton, RectButton } from "./";
import { NFTTitle, SubInfo, ETHPrice } from "./SubInfo";

export const NFTCard = (props) => {
  function navigate() {
    const { item } = props;
    props.navigate.navigate("Reviw", { item });
  }

  return (
    <View style={style.card}>
      <View style={style.imagesContainer}>
        <Image
          source={props.item.image}
          style={style.image}
          resizeMode="cover"
        />
      </View>

      <CircleButton img={assets.heart} top={10} right={10} />

      <SubInfo data={props.item} />

      <View style={style.nftTitle}>
        <NFTTitle
          title={props.item.name}
          subTitle={props.item.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View style={style.price}>
          <ETHPrice price={props.item.price} />
          <RectButton handlePress={navigate} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    position: "relative",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },

  imagesContainer: {
    width: "100%",
    height: 250,
  },

  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },

  nftTitle: {
    padding: SIZES.font,
    width: "100%",
  },

  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
