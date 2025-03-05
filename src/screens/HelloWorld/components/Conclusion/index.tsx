import {Card} from '@src/components';
import {dip} from '@src/constants/u';
import {StyleSheet, Text, View} from 'react-native';

interface MyProps {}

const Conclusion: React.FC<MyProps> = props => {
  const datas = [
    '🐛 面向 Google StackOverflow ChatGPT4.0 编程，0 errors.',
    '👀 Forked Twitter、GitHub，始终关注行业最新动向.',
    '🐞 前后端（Node后端 & Java后端）都懂，能协助后端设计数据库，制定接口规范，协助测试快速定位问题.',
    '💄 追求极致，像素级的设计和毫秒级的动画交互体验.',
    '🚀 代码有强迫症，精确到1个Tab/Space，1个变量名/函数名，Code review其他伙伴代码.',
    '🌏 开源社区 GitHub 的活跃者，线下 Google / Microsoft 开发者会议的积极打酱油者.',
    '👘 熟读明清史和近现代史，修身齐家治国平天下，洞察细节、对事物的发展具有预判，格局能打开 ...',
  ];
  return (
    <Card style={{paddingVertical: dip(8)}}>
      <View>
        {datas.map((it, i) => (
          <Text key={i} style={styles.text}>
            {it}
          </Text>
        ))}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  text: {
    lineHeight: dip(28),
    fontSize: dip(14),
  },
});
export default Conclusion;
