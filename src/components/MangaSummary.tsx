import { useEffect } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { COLORS } from '../settings/colors';
import Images from '../types/data/images';

interface IMangaSummaryProps {
  title: string;
  mangaImg: Images[];
};

const MangaSummary= ({ title, mangaImg }: IMangaSummaryProps) => {
  useEffect(() => {
    
  }, [])

  return (<View style={manga.container}>
    <Text style={manga.title}>{title}</Text>
    <Image source={{uri: `https://res.cloudinary.com/dxfae0yk7/image/upload/v${mangaImg[0].name.split('-')[1]}/mangas-${title}-${mangaImg[0].name}.${mangaImg[0].type}`}} style={manga.image}/>
  </View>)
}

export default MangaSummary;
let { width }= Dimensions.get('screen');
width-= 50;

const manga= StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    color: COLORS.quaternary,
    fontSize: 15,
    minWidth: width/3,
    maxWidth: width/3,
    textAlign: 'center',
    marginBottom: 5
  },
  image: {
    flex: 1, 
    height: 170,
    borderRadius: 10,
  }
});