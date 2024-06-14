import { StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const theme = useColorScheme() ?? 'light';
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#404754' }}
      headerImage={
        <FontAwesome name="chrome" size={310} color={"gray"} style={styles.headerImage} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Güvenli Bir Tarayıcı Kullanın </ThemedText>
      </ThemedView>
      <Collapsible title="Güvenli Tarayıcıların Açıklaması (örn. Chrome, Firefox):">
        <ThemedText type="defaultSemiBold">
          Güvenli Tarayıcılar:
          <ThemedText type="defaultSemiBold">Bu tarayıcılar, kullanıcıları çevrimiçi tehditlerden korumak için güçlü güvenlik özellikleri sunar.
            Çeşitli güvenlik önlemleri ile güvenli bir tarama deneyimi sağlarlar.</ThemedText>
        </ThemedText>
        <ThemedText type="default"> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold">
          Google Chrome:  <FontAwesome name="chrome" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
          <ThemedText type="defaultSemiBold">Güçlü güvenlik özellikleri, sık güncellemeler ve kimlik avı ve kötü amaçlı yazılımlara karşı yerleşik koruma ile bilinir.</ThemedText>
        </ThemedText>
        <ThemedText type="default"> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold">
          Mozilla Firefox:  <FontAwesome name="firefox" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
          <ThemedText type="defaultSemiBold">Açık kaynaklı bir tarayıcı olup, Gelişmiş İzleme Koruması gibi gizlilik odaklı özellikleri ve düzenli güvenlik güncellemeleri ile övülür.</ThemedText>
        </ThemedText>
        <ThemedText type="default"> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold">
          Microsoft Edge:  <FontAwesome name="edge" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
          <ThemedText type="defaultSemiBold">SmartScreen ve izleme önleme gibi entegre güvenlik özellikleri sunar.</ThemedText>
        </ThemedText>
        <ThemedText type="default"> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold">
          Safari:  <FontAwesome name="safari" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
          <ThemedText type="defaultSemiBold">Özellikle macOS ve iOS kullanıcıları için güçlü gizlilik ve güvenlik özellikleri sunan Apple’ın tarayıcısıdır.</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Güvenli Tarayıcıları Kullanmanın Faydaları:">
        <ThemedText>
          <ThemedText type='subtitle'>Zararlı Web Sitelerinden Koruma:</ThemedText>
          <ThemedText type="defaultSemiBold"> Güvenli tarayıcılar, potansiyel olarak zararlı web sitelerini tespit edebilir ve kullanıcıları uyarabilir.</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type='subtitle'>Düzenli Güvenlik Güncellemeleri:</ThemedText>
          <ThemedText type="defaultSemiBold"> Sık güncellemeler, tarayıcının en son tehditlere karşı korunduğundan emin olur.</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type='subtitle'>Gizlilik Özellikleri:</ThemedText>
          <ThemedText type="defaultSemiBold"> İzleme koruması ve gizli mod gibi özellikler kullanıcı gizliliğini korumaya yardımcı olur.</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type='subtitle'>Kimlik Avı ve Kötü Amaçlı Yazılım Koruması:</ThemedText>
          <ThemedText type="defaultSemiBold"> Kimlik avı girişimlerini ve kötü amaçlı yazılımları tanımlayıp engelleyen yerleşik araçlar.</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type='subtitle'>Güvenli Bağlantılar:</ThemedText>
          <ThemedText type="defaultSemiBold"> Güvenli veri iletimi sağlamak için en son güvenlik protokollerini destekler.</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Düzenli Güncelleme Yapın">
        <ThemedText type='subtitle'>Tarayıcı ve İşletim Sistemini Güncel Tutmanın Önemi:</ThemedText>
        <ThemedText type="defaultSemiBold"> {`Güvenlik Yamaları: Güncellemeler genellikle son sürümden bu yana keşfedilen güvenlik açıkları için yamalar içerir`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Gelişmiş İşlevsellik:</ThemedText>
        <ThemedText type="defaultSemiBold"> {`Güncellemeler, genel kullanıcı deneyimini iyileştiren geliştirmeler ve yeni özellikler getirebilir.`} </ThemedText>
        <ThemedText type='subtitle'>Uyumluluk:</ThemedText>
        <ThemedText type="defaultSemiBold"> {`Yeni web teknolojileri ve hizmetleri ile uyumluluğun sağlanması.`} </ThemedText>
        <ThemedText type='subtitle'>Performans İyileştirmeleri:</ThemedText>
        <ThemedText type="defaultSemiBold"> {` Güncellemeler tarayıcı ve işletim sisteminin hızını ve verimliliğini artırabilir.`} </ThemedText>
      </Collapsible>
      <Collapsible title="Otomatik Güncellemeleri Etkinleştirme Adımları:">
        <ThemedText type='subtitle'>Tarayıcılar İçin:</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='defaultSemiBold'>
          <ThemedText type='subtitle'>Google Chrome:</ThemedText>  <FontAwesome name="chrome" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {` Genellikle otomatik olarak güncellenir. Kontrol etmek için Menü > Yardım > Google Chrome Hakkında'ya gidin. 
        Chrome güncellemeleri kontrol eder ve otomatik olarak yükler.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='defaultSemiBold'>
          <ThemedText type='subtitle'>Mozilla Firefox:</ThemedText> <FontAwesome name="firefox" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Menü > Seçenekler > Genel > Firefox Güncellemeleri'ne gidin. "Güncellemeleri otomatik olarak yükle" seçeneğinin seçili olduğundan emin olun.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='defaultSemiBold'>
          <ThemedText type='subtitle'>Microsoft Edge:</ThemedText>  <FontAwesome name="edge" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Edge, Windows Update üzerinden güncellenir. Windows Update'in açık olduğundan emin olun.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='defaultSemiBold'>
          <ThemedText type='subtitle'>Safari:</ThemedText>   <FontAwesome name="safari" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Safari güncellemeleri macOS güncellemeleriyle birlikte gelir. Sistem Tercihleri > Yazılım Güncelleme'ye gidin ve otomatik güncellemeleri etkinleştirin.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>İşletim Sistemleri İçin:</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText>
          <ThemedText type='subtitle'>Windows:</ThemedText>  <FontAwesome name="windows" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {` Ayarlar > Güncelleme ve Güvenlik > Windows Update'e gidin. Otomatik güncellemeleri etkinleştirin.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText>
          <ThemedText type='subtitle'>MacOS:</ThemedText>  <FontAwesome name="apple" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Sistem Tercihleri > Yazılım Güncelleme'ye gidin. "Mac’imi otomatik olarak güncel tut" seçeneğini etkinleştirin.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText>
          <ThemedText type='subtitle'>Linux:</ThemedText>  <FontAwesome name="linux" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Güncellemeleri düzenli olarak kontrol etmek için paket yöneticisini kullanın, örn. Ubuntu için sudo apt update && sudo apt upgrade.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='defaultSemiBold'>
          <ThemedText type='subtitle'>Safari:</ThemedText>   <FontAwesome name="safari" size={24} color={theme === 'light' ? "black" : "white"} /> {`\n`}
        </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Safari güncellemeleri macOS güncellemeleriyle birlikte gelir. Sistem Tercihleri > Yazılım Güncelleme'ye gidin ve otomatik güncellemeleri etkinleştirin.`} </ThemedText>
      </Collapsible>
      <Collapsible title="HTTPS Kontrolü Yapın">
        <ThemedText type='subtitle'>HTTPS (HyperText Transfer Protocol Secure):</ThemedText>
        <ThemedText type='defaultSemiBold'>HTTP'nin bir uzantısı olan HTTPS, bilgisayar ağı üzerinden güvenli iletişim için kullanılır.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Şifreleme:</ThemedText>
        <ThemedText type="defaultSemiBold"> {` Kullanıcının tarayıcısı ile web sitesi arasında değiş tokuş edilen veriler şifrelenir ve ele geçirilmekten korunur.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Kimlik Doğrulama:</ThemedText>
        <ThemedText type="defaultSemiBold"> {`Kullanıcının iletişim kurduğu web sitesinin sahte veya kimlik avı sitesi olmadığını garanti eder.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Veri Bütünlüğü:</ThemedText>
        <ThemedText type="defaultSemiBold"> {`Veri iletimi sırasında verilerin değiştirilmesini önler.`} </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
