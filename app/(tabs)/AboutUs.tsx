import { StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AboutUs() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#404754' }}
      headerImage={
        <FontAwesome name="file-text" size={310} color={"gray"} style={styles.headerImage} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{textDecorationLine:"underline"}} >Hakkımızda</ThemedText>
      </ThemedView>
        <ThemedText type="defaultSemiBold">

          Project Number: 2022-3-TR01-KA210-YOU-000096006
          The European Commission support for the production of this publication does not constitute an endorsement of the contents,
          which reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.
          This document has been created by the collaboration of the whole DigitaLife partnership: Buruciye Gençlik ve Eğitim Derneği, Eğitimde Diriliş Derneği,
          EDUCATIONAL&CULTURAL ACADEMY “NEOLOGOS, Association for Sustainable Development ARS PUBLIKA, ASOCIATIA TINERII 3 D. All images used in this report are copyright-free,
          downloaded from the project website.
        </ThemedText>

    </ParallaxScrollView>
  )
}
const styles = StyleSheet.create({
  titleContainer: {
    display:'flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: 8,
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
});