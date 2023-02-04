import { Text, Button, View, FlatList } from "react-native";
import { COLORS, NFTData } from "../constants";

import { NFTCard, FocusedStatus, HomeHeader } from "../components";

export const HomeScreen = ({ navigation }) => {
  return (
    <>
      <FocusedStatus backgroundColor={COLORS.primary} />

      <View>
        <FlatList
          data={NFTData}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={<HomeHeader />}
          renderItem={({ item }) => {
            return <NFTCard navigate={navigation} item={item} />;
          }}
        />
      </View>

      <Button title="Rewiew" />
    </>
  );
};
