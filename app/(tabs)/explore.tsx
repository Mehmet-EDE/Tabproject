import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet} from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="lock-open" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Şifre Yönetimi</ThemedText>
      </ThemedView>
      <Collapsible title="Genel Bakış">
        <ThemedText type="subtitle">
          Güçlü ve Güvenli Şifrelerin Önemi:
        </ThemedText>
        <ThemedText type="defaultSemiBold">Şifreler, çevrimiçi hesaplarınızı ve kişisel bilgilerinizi korumanın ilk savunma hattıdır.
          Güçlü ve güvenli şifreler, yetkisiz erişimi önleyerek hesaplarınızı ve verilerinizi korur</ThemedText>
        <ThemedText type="subtitle"></ThemedText>
      </Collapsible>
      <Collapsible title="Güçlü Şifreler Oluşturun">
        <ThemedText>
          Güçlü Şifrelerin Özellikleri (Uzunluk, Karmaşıklık):
          <ThemedText>{`\n`}</ThemedText>
          <ThemedText>{`\n`}</ThemedText>
          <ThemedText type='subtitle'>Uzunluk:</ThemedText>
          <ThemedText type="defaultSemiBold"> En az 12 karakter uzunluğunda olmalıdır. Daha uzun şifreler daha güvenlidir.</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type='subtitle'>Karmaşıklık:</ThemedText>
          <ThemedText type="defaultSemiBold"> {`Büyük ve küçük harfler, sayılar ve özel karakterler içermelidir (örn. !, @, #, $, %).`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type='subtitle'>Tahmin Edilemezlik:</ThemedText>
          <ThemedText type="defaultSemiBold"> Yaygın kelimelerden, kişisel bilgilerden veya ardışık karakterlerden kaçınılmalıdır.</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type='subtitle'>Güçlü ve Zayıf Şifre Örnekleri:</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> Zayıf Şifre:</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> 123456</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> password</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> abc123</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> Güçlü Şifre:</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> M@rtiN2021!</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> 5h!ft^Tig3r$!</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
          <ThemedText type="defaultSemiBold"> !QwE4rT@8pL#</ThemedText>
          <ThemedText> {`\n`} </ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Şifre Yöneticisi Kullanın">
        <ThemedText type='subtitle'>Şifre Yöneticisi Kullanmanın Faydaları:</ThemedText>
        <ThemedText type="defaultSemiBold"> Güvenlik: Şifre yöneticileri, karmaşık ve benzersiz şifreler oluşturur ve saklar, bu da aynı şifreyi birden fazla hesapta kullanma ihtiyacını ortadan kaldırır. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Kolaylık: Şifre yöneticileri, şifreleri hatırlama ve girme sürecini otomatikleştirir, bu da zamandan tasarruf sağlar. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Merkezi Yönetim: Tüm şifrelerinizi tek bir güvenli yerde saklayarak, hesaplarınıza kolay erişim sağlar. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Önerilen Güvenilir Şifre Yöneticileri:</ThemedText>
        <ThemedText type="defaultSemiBold"> LastPass: Kullanıcı dostu ve güçlü güvenlik özellikleri ile bilinir. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> 1Password: Çapraz platform desteği ve güvenli şifre paylaşımı özellikleri sunar. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Bitwarden: Açık kaynaklı ve ücretsiz sürümü ile popülerdir. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Dashlane: Güçlü şifre oluşturma ve otomatik doldurma özellikleri ile öne çıkar. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
      </Collapsible>
      <Collapsible title="İki Faktörlü Kimlik Doğrulamayı (2FA) Etkinleştirin">
        <ThemedText type='subtitle'>2FA'nın Açıklaması:</ThemedText>
        <ThemedText type="defaultSemiBold"> İki Faktörlü Kimlik Doğrulama (2FA): Hesabınıza giriş yaparken ikinci bir doğrulama adımı ekleyerek güvenliği artıran bir yöntemdir.
          Genellikle şifreye ek olarak bir doğrulama kodu gerektirir. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Birinci Faktör: Kullanıcı adı ve şifre. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> İkinci Faktör: SMS, e-posta, kimlik doğrulama uygulaması veya biyometrik doğrulama gibi ek bir doğrulama yöntemi. </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Popüler Platformlarda 2FA'nın Etkinleştirilmesi Adımları:</ThemedText>
        <ThemedText type="subtitle"> Google: </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Google hesabınıza giriş yapın.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Güvenlik sekmesine gidin.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> 2 Adımlı Doğrulama"yı seçin ve talimatları izleyin.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="subtitle"> Facebook: </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Facebook hesabınıza giriş yapın.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Ayarlar > Güvenlik ve Giriş sekmesine gidin.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> İki Faktörlü Kimlik Doğrulama"yı seçin ve talimatları izleyin.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="subtitle"> Twitter: </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Twitter hesabınıza giriş yapın.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Ayarlar ve Gizlilik > Güvenlik sekmesine gidin.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> İki Aşamalı Doğrulama"yı seçin ve talimatları izleyin..</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="subtitle"> Instagram: </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> Instagram hesabınıza giriş yapın.</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Ayarlar > Güvenlik > İki Faktörlü Kimlik Doğrulama'ya gidin.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold">{`Başla"yı seçin ve talimatları izleyin.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>

      </Collapsible>
      <Collapsible title="Şifreleri Düzenli Olarak Güncelleyin !">
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Şifreleri Düzenli Olarak Güncellemenin Önemi:</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Güvenlik İyileştirme: Düzenli olarak şifreleri güncellemek, 
        eski ve potansiyel olarak tehlikeye girmiş şifrelerin kullanılmasını önler.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Hesap Koruma: Düzenli güncellemeler, hesaplarınızı güvende tutar ve olası ihlallere karşı korur.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>Şifre Değişiklikleri İçin Hatırlatıcı Ayarlama:</ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Takvim Kullanma: Takvim uygulamanızda belirli aralıklarla (örn. her 3 ayda bir) şifre değişiklik hatırlatıcıları oluşturun.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Şifre Yöneticisi Hatırlatıcıları: Birçok şifre yöneticisi, şifrelerinizi ne zaman değiştirmeniz gerektiğini hatırlatacak özellikler sunar.`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Mobil Uygulama Bildirimleri: Mobil uygulamalar veya görev yöneticileri kullanarak hatırlatıcı bildirimler ayarlayın (örn. Google Keep, Microsoft To Do).`} </ThemedText>
        <ThemedText> {`\n`} </ThemedText>
        <ThemedText type='subtitle'>SMS Kimlik Avı (Smishing): </ThemedText>
        <ThemedText type="defaultSemiBold"> {`Dolandırıcılar, güvenilir bir kaynaktan geliyormuş gibi görünen sahte SMS mesajları gönderirler.`} </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
