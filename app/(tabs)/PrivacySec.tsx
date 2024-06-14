import { Fontisto } from '@expo/vector-icons';
import { StyleSheet, useColorScheme } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const PrivacySec = () => {
    const theme = useColorScheme() ?? 'light';
    return (
        <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={<Fontisto name="persons" size={310} color="gray" />
        }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Kişisel Bilgileri Koruma</ThemedText>
            </ThemedView>
            <Collapsible title="Genel Bakış">
                <ThemedText type="defaultSemiBold">
                    Çevrimiçi ve Çevrimdışı Kişisel Bilgileri Koruma Stratejileri
                    <ThemedText type="defaultSemiBold">Kişisel bilgilerimizi hem çevrimiçi hem de çevrimdışı olarak korumak,
                        kimlik hırsızlığı, dolandırıcılık ve diğer güvenlik tehditlerinden korunmak için hayati öneme sahiptir</ThemedText>
                </ThemedText>
                <ThemedText type="subtitle"></ThemedText>
            </Collapsible>
            <Collapsible title="Cihazlarınızı Güvenceye Alın">
                <ThemedText>
                    Cihazları Şifreler, PIN'ler veya Biyometrik Yöntemlerle Kilitlemenin Önem ;
                    <ThemedText>{`\n`}</ThemedText>
                    <ThemedText>{`\n`}</ThemedText>
                    <ThemedText type='subtitle'>Güvenlik:</ThemedText>
                    <ThemedText type="defaultSemiBold"> Cihazınızı şifreler, PIN'ler veya biyometrik doğrulama yöntemleriyle (parmak izi, yüz tanıma) kilitlemek, yetkisiz erişimi önler.</ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText type='subtitle'>Veri Koruma:</ThemedText>
                    <ThemedText type="defaultSemiBold"> Kilitli cihazlar, kişisel ve hassas verilerinizi yetkisiz erişim ve hırsızlıktan korur</ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText type='subtitle'>Gizlilik:</ThemedText>
                    <ThemedText type="defaultSemiBold"> Cihazınız kaybolsa veya çalınsa bile, kilitli olması, bilgilerinizin güvende kalmasını sağlar.</ThemedText>
                </ThemedText>
            </Collapsible>
            <Collapsible title="Cihaz Şifreleme Ayarlama İpuçları :">
                <ThemedText type='subtitle'>iOS Cihazları:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`Ayarlar > Yüz ID ve Parola (veya Dokunmatik ID ve Parola) > "Parola Aç" seçeneğini seçin ve güçlü bir parola oluşturun.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Android Cihazları:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`Ayarlar > Güvenlik > Ekran Kilidi > "Şifre" veya "PIN" seçeneğini seçin ve güçlü bir şifre oluşturun. Ayrıca, 
                "Şifreleme" sekmesine giderek cihazınızın verilerini şifreleyin.`} </ThemedText>
                <ThemedText type='subtitle'>Bilgisayarlar:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`Windows: Ayarlar > Güncelleme ve Güvenlik > Cihaz Şifreleme (varsa) > "Şifrelemeyi Aç" seçeneğini seçin. 
                BitLocker'ı kullanarak tam disk şifreleme de yapabilirsiniz.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"> {`macOS:  Sistem Tercihleri > Güvenlik ve Gizlilik > FileVault sekmesine gidin ve "FileVault'u Aç" seçeneğini seçin.`} </ThemedText>
            </Collapsible>
            <Collapsible title="Halka Açık Wi-Fi'dan Kaçının">
                <ThemedText type='subtitle'>Halka Açık Wi-Fi Ağlarını Kullanmanın Riskleri:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`Halka açık Wi-Fi ağları genellikle güvenli değildir ve verilerinizin şifrelenmeden iletilmesine neden olabilir.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Kimlik Avı ve Kötü Amaçlı Yazılım:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`Halka açık Wi-Fi ağları, kimlik avı ve kötü amaçlı yazılım saldırılarına karşı savunmasızdır.`} </ThemedText>
                <ThemedText type='subtitle'>Veri Gözetimi:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`Kötü niyetli kullanıcılar, halka açık Wi-Fi ağlarında veri trafiğinizi izleyebilir ve hassas bilgilerinizi çalabilir.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>VPN Kullanımı İçin Öneriler</ThemedText>
                <ThemedText type="defaultSemiBold"> {`VPN (Virtual Private Network): VPN, internet bağlantınızı şifreleyerek verilerinizi güvence altına alır ve çevrimiçi gizliliğinizi korur.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Güvenilir VPN Sağlayıcılarından Bazıları:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`NordVPN: Güçlü şifreleme, yüksek hızlar ve geniş sunucu ağı sunar.`} </ThemedText>
                <ThemedText type="defaultSemiBold"> {`ExpressVPN: Yüksek güvenlik standartları ve kullanıcı dostu arayüzü ile bilinir.`} </ThemedText>
                <ThemedText type="defaultSemiBold"> {`CyberGhost: Geniş sunucu ağı ve kullanıcı dostu özellikler sunar.`} </ThemedText>
            </Collapsible>
            <Collapsible title="Kimlik Avı ve Dolandırıcılıklara Dikkat Edin!">
                <ThemedText type='subtitle'>Yaygın Kimlik Avı ve Dolandırıcılık Türleri:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`E-posta Kimlik Avı: Dolandırıcılar, güvenilir bir kaynaktan geliyormuş gibi görünen sahte e-postalar gönderirler ve hassas bilgilerinizi çalmak için sizi kandırmaya çalışırlar.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Kimlik Avı ve Kötü Amaçlı Yazılım:</ThemedText>
                <ThemedText type="defaultSemiBold"> {`Halka açık Wi-Fi ağları, kimlik avı ve kötü amaçlı yazılım saldırılarına karşı savunmasızdır.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>SMS Kimlik Avı (Smishing): </ThemedText>
                <ThemedText type="defaultSemiBold"> {`Dolandırıcılar, güvenilir bir kaynaktan geliyormuş gibi görünen sahte SMS mesajları gönderirler.`} </ThemedText>
            </Collapsible>
        </ParallaxScrollView>
    )
}

export default PrivacySec
const styles = StyleSheet.create({
    headerImage: {
        width: '100%',
        height: 300,
      },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});