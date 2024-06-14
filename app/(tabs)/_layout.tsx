import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isLoaded, setIsLoaded] = useState(true)
  setTimeout(() => {
    setIsLoaded(false)
  }, 5000);

  return (
    <>
      {
        isLoaded ? <View style={{ flex:1,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#fff' }}>
          <Image source={require("@/assets/images/openingf.png")} style={{width:"95%"}} resizeMode='center' />
        </View> :
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
              headerShown: false,
            }}>
            <Tabs.Screen
              name="index"
              options={{
                title: 'Güvenli Tarayıcı',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'browsers' : 'browsers-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="explore"
              options={{
                title: 'Şifre Yönetimi',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'lock-open' : 'lock-closed'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="socialMedia"
              options={{
                title: 'Sosyal Medya Güvenliği',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'barcode' : 'barcode-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="PrivacySec"
              options={{
                title: 'Kişisel güvenlik',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
                ),
              }}
            />
            <Tabs.Screen
              name="AboutUs"
              options={{
                title: 'Hakkımızda',
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon name={focused ? 'document-text' : 'document-text-outline'} color={color} />
                ),
              }}
            />
          </Tabs>
      }
    </>
  );
}