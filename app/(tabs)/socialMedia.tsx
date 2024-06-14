import { StyleSheet, useColorScheme } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const socialMedia = () => {
    const theme = useColorScheme() ?? 'light';
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Entypo name="twitter" size={310} color="gray" />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Sosyal Medya Güvenliği </ThemedText>
            </ThemedView>
            <Collapsible title="Genel Bakış">
                <ThemedText type="subtitle">
                    Sosyal Medya Platformlarında Güvende Kalmak İçin En İyi Uygulamalar
                </ThemedText>
                <ThemedText type="defaultSemiBold">Sosyal medya, kişisel bilgilerimizin ve özel hayatımızın büyük bir kısmını paylaştığımız bir ortamdır.
                    Güvende kalmak için doğru ayarları yapmak ve bilinçli davranmak önemlidir.</ThemedText>
                <ThemedText>{`\n`} </ThemedText>
            </Collapsible>
            <Collapsible title="Popüler Sosyal Medya Platformlarında Gizlilik Ayarlarının Yapılandırılması">
                <ThemedText>{`\n`}</ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Facebook: </ThemedText>  <Entypo name="facebook" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">{`Ayarlar > Gizlilik sekmesine gidin.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold">{`"Gizlilik Ayarları ve Araçlar" bölümünde kimlerin gönderilerinizi görebileceğini, kimlerin size arkadaşlık isteği gönderebileceğini ve kimlerin sizi arayabileceğini ayarlayın.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Instagram:</ThemedText>  <Entypo name="instagram" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">{`Ayarlar > Gizlilik sekmesine gidin.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold">{`"Hesap Gizliliği" bölümünde hesabınızı gizli yaparak, gönderilerinizi yalnızca takipçilerinizin görmesini sağlayın.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Twitter:</ThemedText>  <Entypo name="twitter" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">{`Ayarlar ve Gizlilik > Gizlilik ve Güvenlik sekmesine gidin.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold">{`"Tweet Gizliliği" bölümünde tweetlerinizi yalnızca onayladığınız takipçilerinizin görebilmesi için "Tweetlerimi korumaya al" seçeneğini etkinleştirin.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>LinkedIn:</ThemedText>
                <ThemedText type="defaultSemiBold">{`Ayarlar ve Gizlilik sekmesine gidin.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold">{`"Gizlilik" sekmesinde profil görünürlüğünüzü ve paylaşımlarınızın kimler tarafından görülebileceğini ayarlayın.`} </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
            </Collapsible>
            <Collapsible title="Gönderilerinizi ve Bilgilerinizi Kimlerin Görebileceğini Sınırlandırmanın Faydaları:">
                <ThemedText>
                    <ThemedText type='subtitle'>Kişisel Güvenlik:</ThemedText>
                    <ThemedText type="defaultSemiBold"> Kişisel bilgilerinizi yalnızca tanıdığınız ve güvendiğiniz kişilerle paylaşarak kimlik hırsızlığı ve dolandırıcılık riskini azaltırsınız.</ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText type='subtitle'>Gizlilik:</ThemedText>
                    <ThemedText type="defaultSemiBold"> Paylaşımlarınızı sınırlı bir kitleye açarak, özel hayatınızın kontrolünü elinizde tutarsınız.</ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                    <ThemedText type='subtitle'>İtibar Yönetimi: </ThemedText>
                    <ThemedText type="defaultSemiBold"> Bilgilerinizi ve paylaşımlarınızı sınırlı tutarak, profesyonel ve kişisel itibarınızı korursunuz.</ThemedText>
                    <ThemedText> {`\n`} </ThemedText>
                </ThemedText>
            </Collapsible>
            <Collapsible title="Arkadaşlık İsteklerine Dikkat Edin">
                <ThemedText type='subtitle'>Arkadaşlık İsteklerini Gönderen Kişilerin Kimliğini Doğrulama İpuçları:</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Profil İncelemesi:</ThemedText>
                <ThemedText type="defaultSemiBold"> Gönderilen arkadaşlık isteğini gönderen kişinin profilini dikkatlice inceleyin. Profil fotoğrafı, geçmiş gönderiler ve ortak arkadaşlar gibi bilgileri kontrol edin. </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Doğrulama Mesajı:</ThemedText>
                <ThemedText type="defaultSemiBold"> Tanımadığınız kişilerden gelen arkadaşlık isteklerini kabul etmeden önce, kişinin kimliğini doğrulamak için bir mesaj gönderin. </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Ortak Arkadaşlar:</ThemedText>
                <ThemedText type="defaultSemiBold">  Ortak arkadaşlarınızın olup olmadığını kontrol edin. Ortak arkadaşlar varsa, onlardan bu kişinin kimliği hakkında bilgi alın.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Sadece Tanıdığınız Kişilerin İsteklerini Kabul Etmenin Önemi:</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Güvenlik:</ThemedText>
                <ThemedText type="defaultSemiBold"> Tanımadığınız kişilerin arkadaşlık isteklerini kabul etmek, kişisel bilgilerinize yetkisiz erişim riskini artırabilir. </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Gizlilik: </ThemedText>
                <ThemedText type="defaultSemiBold">Yalnızca tanıdığınız kişileri kabul ederek, özel hayatınızın ve kişisel bilgilerinizin güvende kalmasını sağlarsınız.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Dolandırıcılık Önleme: </ThemedText>
                <ThemedText type="defaultSemiBold">Sahte hesaplar ve kimlik avı dolandırıcılıklarına karşı korunursunuz.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
            </Collapsible>
            <Collapsible title="Paylaşmadan Önce Düşünün" >
                <ThemedText type='subtitle'>Çevrimiçi Kişisel Bilgileri Paylaşma Kılavuzları</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Hassas Bilgiler: </ThemedText>
                <ThemedText type="defaultSemiBold"> Adres, telefon numarası, doğum tarihi gibi hassas kişisel bilgileri paylaşmaktan kaçının. </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Konum Bilgisi:</ThemedText>
                <ThemedText type="defaultSemiBold"> Anlık konum bilgilerinizi paylaşmamaya özen gösterin. Geçmiş konum bilgilerinizi paylaşmak daha güvenlidir. </ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Kişisel ve Mali Bilgiler:</ThemedText>
                <ThemedText type="defaultSemiBold"> Kimlik numarası, kredi kartı bilgileri gibi kişisel ve mali bilgileri asla paylaşmayın.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Paylaşmaktan Kaçınılması Gereken Potansiyel Olarak Riskli Bilgi Örnekleri:</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Adres ve Telefon Numarası: </ThemedText>
                <ThemedText type="defaultSemiBold"> Bu bilgilerin kötü niyetli kişiler tarafından kullanılmasını önlemek için paylaşmaktan kaçının.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Doğum Tarihi ve Kimlik Bilgileri: </ThemedText>
                <ThemedText type="defaultSemiBold">Kimlik hırsızlığı riskini artırdığı için bu bilgileri paylaşmayın.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Günlük Rutinler:</ThemedText>
                <ThemedText type="defaultSemiBold">Günlük rutininizi ve belirli saatlerde nerede olacağınızı paylaşmak, güvenlik risklerini artırabilir.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
            </Collapsible>
            <Collapsible title="Bildirme ve Engelleme">
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type='subtitle'>Şüpheli Aktiviteleri veya Hesapları Bildirme:</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Facebook: </ThemedText>  <Entypo name="facebook" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">Şüpheli bir hesabın profiline gidin, "…" simgesine tıklayın ve "Bu Profili Bildir" seçeneğini seçin.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Instagram:</ThemedText>  <Entypo name="instagram" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">Şüpheli bir hesabın profiline gidin, "…" simgesine tıklayın ve "Rapor Et" seçeneğini seçin.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Twitter:</ThemedText>  <Entypo name="twitter" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">Şüpheli bir hesabın profiline gidin, "…" simgesine tıklayın ve "Rapor Et" seçeneğini seçin.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="subtitle">İstenmeyen Kişileri Engelleme Adımları:</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="subtitle">İstenmeyen Kişileri Engelleme Adımları:</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Facebook: </ThemedText>  <Entypo name="facebook" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">{`Engellemek istediğiniz kişinin profiline gidin, "…" simgesine tıklayın ve "Engelle" seçeneğini seçin.`}</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Instagram:</ThemedText>  <Entypo name="instagram" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">Engellemek istediğiniz kişinin profiline gidin, "…" simgesine tıklayın ve "Engelle" seçeneğini seçin.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
                <ThemedText type="defaultSemiBold"><ThemedText type='subtitle'>Twitter:</ThemedText>  <Entypo name="twitter" size={24} color={theme === 'light' ? "black" : "white"} /> </ThemedText>
                <ThemedText type="defaultSemiBold">Engellemek istediğiniz kişinin profiline gidin, "…" simgesine tıklayın ve "Engelle" seçeneğini seçin.</ThemedText>
                <ThemedText> {`\n`} </ThemedText>
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
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});

export default socialMedia