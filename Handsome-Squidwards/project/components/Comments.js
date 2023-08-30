import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Text, Image, TextInput, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Comments = () => {
    const [text, setText] = useState('');
    const [colr, setColr] = useState('black');

    const kok = () => {
        if(colr==="black"){
            setColr('red')
        }else{
            setColr('black')
        }
    }

  return (
    <View>
          <View style={{alignItems: 'center'}}>
            <View style={{height: 1, width: 414, borderRadius: 1, backgroundColor: '#464646'}}></View>
            <View>
                <View style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginBottom: 2}}>
                    <Image
                    style={{height: 40, width: 40, borderRadius: 20, margin: 10, borderColor: '#282828', borderWidth: 0.5}}
                    source={{uri: 'https://c4.wallpaperflare.com/wallpaper/469/411/650/ryan-gosling-blade-runner-2049-depressing-movie-scenes-hd-wallpaper-preview.jpg'}}
                    />
                    <TextInput
                    style={{paddingHorizontal: 16, width: 280, height: 42, borderColor: '#464646', borderWidth: 1, borderRadius: 50}}
                    placeholder='Comment on this post'
                    placeholderTextColor="grey"
                    onChangeText={(e) => setText(e)}
                    value={text}
                    />
                    <TouchableOpacity onPress={() => setText('')}>
                        <Text style={{color: 'black', fontWeight: 'bold', margin: 10}}>Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height: 1, width: 414, borderRadius: 1, backgroundColor: '#464646'}}></View>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginBottom: 2}}>
                    <Image
                    style={{height: 40, width: 40, borderRadius: 20, margin: 10, borderColor: '#282828', borderWidth: 0.5}}
                    source={{uri: 'https://c4.wallpaperflare.com/wallpaper/469/411/650/ryan-gosling-blade-runner-2049-depressing-movie-scenes-hd-wallpaper-preview.jpg'}}
                    />
                    <View>
                        <Text style={{fontSize: 13, fontWeight: '600', color: 'black', marginBottom: 4}}>
                            ryan_gosling
                        </Text>
                        <Text style={{fontSize: 16, fontWeight: '400', color: 'black', width: 260}}>
                            {text}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={{marginHorizontal: 14}} onPress={() => kok()}>
                    <AntDesign name="heart" size={22} color={colr} />
                </TouchableOpacity>
            </View>
          </View>
        </View>
  );
};
