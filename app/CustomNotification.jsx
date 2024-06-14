import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function CustomNotification() {
  const [sendNot, setSendNot] = useState(true);

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Bildirim izni verilmedi!');
        return;
      } else await sendNotification();
    };

    getPermission();
    sendNotification();
  }, []);
  const sendNotification = async () => {
    const notificationArr = [
      "Popüler Sosyal Medya Platformlarında Gizlilik Ayarlarının Yapın",
      "Gönderilerinizi ve Bilgilerinizi Kimlerin Görebileceğini Sınırlandırın",
      "Arkadaşlık İsteklerine Dikkat Edin",
      "Paylaşmadan Önce Düşünün",
      "Güvenli Tarayıcılar Kullanın",
      "Güvenli Tarayıcıları Kullanmanın Faydalarını Biliyor Musun?",
      "Düzenli Güncelleme Yapın",
      "Otomatik Güncellemeleri Etkinleştirin",
      "HTTPS Kontrolü Yapın",
      "Cihazlarınızı Güvenceye Alın",
      "Cihaz Şifreleme Ayarlama İpuçları",
      "Halka Açık Wi-Fi'dan Kaçının",
      "Kimlik Avı ve Dolandırıcılıklara Dikkat Edin!"
    ];
    const randomIndex = Math.floor(Math.random() * notificationArr.length);
    const randomMessage = notificationArr[randomIndex];
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Digital Security Handbook",
        body: randomMessage,
        sound: true,
        badge: 1,
        autoDismiss: false,
      },
      trigger: {
        seconds: 7200,
        repeats: false,

      },
    });
  };

  // if (sendNot) {

  //   setSendNot(false);
  // }

  const intervalId = setInterval(sendNotification, 2 * 60 * 60 * 1000);

  // return () => clearInterval(intervalId);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: "none" }}>
      <Text></Text>
    </View>
  );
}
