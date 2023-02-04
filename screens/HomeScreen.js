import { Text, Button, View, FlatList } from "react-native";
import { useState } from "react";
import { COLORS, NFTData } from "../constants";

import { NFTCard, FocusedStatus, HomeHeader } from "../components";

export const HomeScreen = ({ navigation }) => {

  const [nft, setNft] = useState(NFTData);

  function search(data){
    const value = data;

    if(data === ""){
      setNft(prev => NFTData)
    }else{
      const filterElement = NFTData.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

      setNft(prev => filterElement)

    }
  }

  return (
    <>
      <FocusedStatus backgroundColor={COLORS.primary} />

      <View>
        <FlatList
          data={nft}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader onSearch={search} />}
          renderItem={({ item }) => {
            return <NFTCard  navigate={navigation} item={item} />;
          }}
        />
      </View>
    </>
  );
};
