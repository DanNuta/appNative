import React from "react";
import { Text, Button, View, FlatList} from "react-native";
import { COLORS, NFTData } from "../constants";

import { Home, NFTCard, FocusedStatus, HomeHeader } from "../components";

export const HomeScreen = ({ navigation }) => {
  return (
    <>
      <FocusedStatus backgroundColor={COLORS.primary} />

      <View>
        <FlatList
          data={NFTData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader/>}
          renderItem={({item}) => {
           return <NFTCard item={item}/>
          }}
        />
      </View>
    </>
  );
};
