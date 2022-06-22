import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking
} from 'react-native';

const colorGithub ='#010409';
const colorFontGithub ='#C9D1D9';
const colorDarkFontGithub ='#4F565E';

const imageProfileGithub = 
'https://avatars.githubusercontent.com/u/105795080?v=4';

const urlToMyGithub = 'https://github.com/l1pinh0';

const App = () => {

  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urlToMyGithub);
    }
  };
    return (
        <SafeAreaView style={style.container}>
          <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
          <View style={style.content}>
             <Image
               accessibilityLabel='Foto de Perfil'
               style={style.avatar}
               source={{uri: imageProfileGithub}}
            />
            <Text 
              accessibilityLabel="Nome: luís felipe"
              style={[style.defaultText, style.name]}>
              Luís Felipe
            </Text>

            <Text 
              accessibilityLabel="Nickname: luís felipe"
              style={[style.defaultText, style.nickname]}>
              luís felipe
            </Text>

            <Text 
              accessibilityLabel="Descrição: Sou um iniciante no Git/GitHub
              Meu discord: l1pinh0#7685
              @l1pinh0__"
              style={[style.defaultText, style.description]}>
             Sou um iniciante no Git/GitHub | 
              Meu discord: l1pinh0#7685 | 
              @l1pinh0__
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
              <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>
                    Open in Github 
                </Text>
              </View> 
            </Pressable>  
          </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
        alignItens: 'center', 
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },

    name: { 
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});