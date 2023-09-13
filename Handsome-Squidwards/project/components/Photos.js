import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const photoWidth = screenWidth * 0.33;
const photoGap = screenWidth * 0.005;

export default function Library() {
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [photos, setPhotos] = useState([]);
    const [selectedPhotos, setSelectedPhotos] = useState([]);
  
    async function LoadPhotos() {
      let media = await MediaLibrary.getAssetsAsync({
        mediaType: MediaLibrary.MediaType.photo,
        sortBy: ["creationTime"],
        first: 21,
      });
      setPhotos(media.assets);
    }
  
    async function LoadMorePhotos() {
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
        LoadPhotos();
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
            <Text style={{ color: "white" }}>RequestpermissionResponse</Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    if (!granted && !canAskAgain) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ textAlign: "center", fontize: 16, lineHeight: 23 }}>
            Та зураг харах {"In"} зевшеерел огеегуй байна. {"In\n"} Settings {">"}{" "}
            PermissionResponses {">"} Storage {"In"} сонголтыг идэвожуулээрэй.
          </Text>
        </View>
      );
    }
  
    console.log({ selectedPhotos });
  
    async function Upload() {
      const photo = selectedPhotos[0];
      const info = await MediaLibrary.getAssetInfoAsync(photo);
      const data = new FormData();
      data.append('file', {uri: info.localUri, name: info.filename});
      data.append('upload_present', 'ml_default')
      data.append('cloud_name', 'dx9jxlplc')
  
      fetch('https://api.cloudinary.com/v1_1/dx9jxlplc/upload', {
        method: 'post',
        body: data,
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.secure_url);
      })
      .catch((Error) => {
        alert(Error);
      });
    }
  
    return (
      <View style={{ flex: 1, position: "relative" }}>
        <FlatList
          onEndReached={LoadMorePhotos}
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
                selectedPhotos.findIndex((selected) => selected.id === item.id) +
                1
              }
              photo={item}
              index={index}
            />
          )}
          keyExtractor={(item) => item.uri}
        />
        {selectedPhotos.length > 0 && (
          <TouchableOpacity
            onPress={Upload()}
            style={{
              position: "absolute",
              bottom: 20,
              left: 20,
              backgroundColor: "black",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Text style={{color:"white"}}>Ilgeeh</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  
    function ImageItem({ photo, index, onSelect, onRemove, selected }) {
      const marginHorizontal = index % 3 === 1 ? photoGap : 0;
      return (
        <TouchableOpacity onPress={() => (selected ? onRemove() : onSelect())}>
          <View
            style={{
              width: photoWidth,
              height: photoWidth,
              marginBottom: photoGap,
              marginHorizontal,
              position: "relative",
            }}
          >
            <Image
              source={{ uri: photo.uri }}
              style={{
                backgroundColor: "#ccc",
                width: photoWidth,
                height: photoWidth,
              }}
            />
  
            {!!selected && (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: "aqua",
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white" }}>{selected}</Text>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    }
  }