import {Card, Flex} from '@src/components';
import {colors, images} from '@src/constants/c';
import {useCaches} from '@src/constants/store';
import {dip} from '@src/constants/u';
import {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface MyProps {}

const connects = [
  {
    label: '聊城大学/软件工程',
    value: images.university,
  },
  {
    label: '15552198996',
    value: images.mobile,
  },
  {
    label: 'i@cctv3.net',
    value: images.mail,
  },
  {
    label: 'https://cctv3.net',
    value: images.github,
  },
];

const tags = [
  {label: 'React&RN', value: images.react},
  {label: 'Flutter', value: images.flutter},
  {label: 'Android', value: images.android},
  {label: 'iOS', value: images.ios},
  {label: 'Vue', value: images.vue},
  {label: 'Uni-app', value: images.uni},
];

const Basic: React.FC<MyProps> = memo(props => {
  const {colors, theme} = useCaches();
  return (
    <Card>
      <View>
        <Flex horizontal>
          <Image source={images.i} style={{height: dip(72), width: dip(72)}} />
          <Flex style={{flex: 1, height: dip(72)}} justify="space-between">
            <Flex justify="space-between">
              <View style={{flex: 1}}>
                <Flex horizontal justify="flex-start" align="flex-end">
                  <Text style={{color: '#000', fontSize: dip(24)}}>孙宇鹏</Text>
                  <View style={{width: dip(12)}} />
                  <Text style={{color: '#333', fontSize: dip(18)}}>
                    前端开发工程
                  </Text>
                  <View style={{width: dip(12)}} />
                  <Text style={{color: '#666', fontSize: dip(18)}}>
                    1995.10
                  </Text>
                </Flex>
                <View style={{height: dip(2)}} />
                <View style={{height: 1, backgroundColor: '#ccc'}} />
              </View>
              <View style={{height: dip(10)}} />
              <Flex horizontal style={{gap: dip(12)}}>
                {tags.map((it, i) => (
                  <View key={i}>
                    <Flex horizontal>
                      <Image
                        source={it.value}
                        style={{height: dip(20), width: dip(20)}}
                      />
                      <View style={{width: dip(5)}} />
                      <Text
                        style={{
                          color: theme,
                          fontSize: dip(14),
                        }}>
                        {it.label}
                      </Text>
                    </Flex>
                    <View style={{height: dip(2)}} />
                    <View style={{height: 1, backgroundColor: '#999'}} />
                  </View>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <View style={{height: dip(12)}} />
        <Flex horizontal justify="space-between">
          {connects.map((it, i) => (
            <Flex key={i} horizontal>
              <Image
                source={it.value}
                style={{
                  height: dip(18),
                  width: dip(18),
                }}
              />
              <Text style={{color: '#999', fontSize: dip(16)}}> | </Text>
              <Text style={{color: '#333', fontSize: dip(16)}}>{it.label}</Text>
            </Flex>
          ))}
        </Flex>
      </View>
    </Card>
  );
});

const styles = StyleSheet.create({
  line: {
    width: 1,
    height: dip(20),
    backgroundColor: '#999',
    marginHorizontal: dip(10),
  },
  tags: {},
  tag: {
    borderRadius: dip(12),
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    height: dip(20),
    paddingHorizontal: dip(12),
  },
});

export default Basic;
