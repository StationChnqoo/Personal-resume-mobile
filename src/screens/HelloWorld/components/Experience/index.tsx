import {Card, Flex} from '@src/components';
import {dip} from '@src/constants/u';
import {Image, StyleSheet, Text, View} from 'react-native';

interface MyProps {}

const emojis = [
  require('@src/assets/emoji/huya-1.png'),
  require('@src/assets/emoji/huya-2.png'),
  require('@src/assets/emoji/huya-3.png'),
  //   require('@src/assets/emoji/wechat-1.png'),
  //   require('@src/assets/emoji/wechat-2.png'),
  //   require('@src/assets/emoji/wechat-3.png'),
  //   require('@src/assets/emoji/douyin-1.png'),
  //   require('@src/assets/emoji/douyin-2.png'),
  //   require('@src/assets/emoji/douyin-3.png'),
];

const datas = [
  {
    label:
      '熟练使用 React Native、Flutter、Uni-app 等跨端框架，进行移动应用的开发；',
    value: 1,
  },
  {
    label: '熟练封装复杂业务场景和状态的 Hooks，对业务逻辑和视图解耦；',
    value: 1,
  },
  {
    label:
      '优化各种应用场景的 Query 查询，loading、缓存、重试、防抖、分页、无限加载等；',
    value: 1,
  },
  {label: '熟练封装复杂组件视图，例如瀑布流和轮播等；', value: 3},
  {
    label:
      '对WebView嵌入图表ChartJS、eCharts，视频播放Plyr、DPlayer等有一定经验；',
    value: 2,
  },
  {
    label: '熟悉消息推送、CodePush 代码热更新、Android 8、12~15的权限适配等；',
    value: 2,
  },
  {label: '熟悉 Native Modules 的原生模块的编写；', value: 2},
  {
    label: '熟悉 Android 和 iOS 的多渠道打包和 Jenkins 自动化构建脚本的编写；',
    value: 1,
  },
  {
    label: '熟悉 Android 和 iOS 的上架流程，处理上架过程中遇见的若干问题；',
    value: 1,
  },

  {
    label:
      '熟悉 React Native 重要发行版本的升级和组件库的升级，以及对应调试方式的更换等。',
    value: 2,
  },
];

const Experience: React.FC<MyProps> = props => {
  return (
    <Card style={{paddingVertical: dip(8)}}>
      <View style={{}}>
        {datas.map((it, i) => (
          <Flex
            key={i}
            style={{marginVertical: dip(4)}}
            horizontal
            justify="flex-start">
            <Image
              source={emojis[it.value - 1]}
              style={{width: dip(21), height: dip(21)}}
            />
            <View style={{width: dip(4)}} />
            <Text
              style={{color: '#000', fontSize: dip(14), lineHeight: dip(20)}}>
              {it.label}
            </Text>
          </Flex>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({});

export default Experience;
