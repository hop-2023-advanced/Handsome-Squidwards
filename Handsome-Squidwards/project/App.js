import * as MediaLibrary from "expo-media-library";
import { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

const imageWidth = windowWidth + 0.33;
const imageGap = windowWidth * 0.005;

export default function App() {
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  async function loadInitialPhotos() {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.photo,
      sortBy: ["creationTime"],
      first: 21,
    });
    setPhotos(media.assets);
  }

  async function loadmorePhotos() {
    let media = await MediaLibrary.getAssetsAsync({
      after: photos[photos.length - 1].id,
      mediaType: MediaLibrary.MediaType.photo,
      sortBy: ["creationTime"],
      first: 21,
    });
    setPhotos([...photos, ...media.assets]);
  }

  useEffect(() => {
    if (permissionResponse && permissionResponse.granted) {
      loadInitialPhotos();
    }
  }, [permissionResponse]);

  if (!permissionResponse) {
    return <View />;
  }
  const { granted, canAskAgain } = permissionResponse;

  if (!granted && canAskAgain) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          style={{ backgroundColor: "black", padding: 20, borderRadius: 10 }}
          onPress={requestPermission}
        >
          <Text style={{ color: "white" }}>Request SEX</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!granted && !canAskAgain) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 23 }}>
          View-Photo Permission is not granted.
        </Text>
      </View>
    );
  }

  console.log({ selectedPhotos });

  return (
    <FlatList
      onEndReached={loadmorePhotos}
      numColumns={3}
      data={photos}
      renderItem={({ item, index }) => (
        <ImageItem
          onSelect={() => setSelectedPhotos([...selectedPhotos, item])}
          onRemove={() =>
            setSelectedPhotos(
              selectedPhotos.filter((selected) => selected.id !== item.id)
            )
          }
          selected={
            selectedPhotos.findIndex((selected) => selected.id === item.id) + 1
          }
          photo={item}
          index={index}
        />
      )}
      keyExtractor={(item) => item.uri}
    />
  );
}

function ImageItem({ photo, index, onSelect, onRemove, selected }) {
  const marginHorizontal = index % 3 === 1 ? imageGap : 0;

  return (
    <TouchableOpacity onPress={() => (selected ? onRemove() : onSelect())}>
      <View
        style={{
          position: "relative",
          width: imageWidth,
          height: imageWidth,
          marginBottom: imageGap,
          marginHorizontal,
        }}
      >
        <Image
          source={{ uri: photo.uri }}
          style={{
            backgroundColor: "#ccc",
            width: imageWidth,
            height: imageWidth,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

// function upload () {
//   return ()
// }
