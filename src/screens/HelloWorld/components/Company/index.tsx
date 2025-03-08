import {Card, Flex, TextView} from '@src/components';
import {companies} from '@src/constants/c';
import {useCaches} from '@src/constants/store';
import {dip} from '@src/constants/u';
import {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface MyProps {}

const Company: React.FC<MyProps> = memo(props => {
  const {colors, theme} = useCaches();
  return (
    <Card>
      {companies.map((it, i) => (
        <View key={i}>
          <Flex horizontal justify="space-between">
            <TextView style={{fontSize: dip(18), color: '#000'}}>
              {it.parent}
            </TextView>
            <Text style={{fontSize: dip(16), color: '#333'}}>{it.date}</Text>
          </Flex>
          {it.children.length > 0 ? (
            <Flex horizontal justify="flex-start" style={{marginTop: dip(10)}}>
              <Text style={{fontSize: dip(14), color: '#666'}}>
                {it.children.join('、')}
              </Text>
            </Flex>
          ) : null}
          <View style={{height: dip(10)}} />
          <View style={styles.published}>
            {it.published.map((it, i) => (
              <View key={i} style={{marginVertical: dip(4)}}>
                <Flex justify="space-between" horizontal>
                  <Text
                    style={{
                      color: theme,
                      fontSize: dip(14),
                    }}>
                    {it.label}
                  </Text>
                  <Text
                    style={{
                      color: it?.link ? '#097cfa' : '#666',
                      fontSize: dip(14),
                      textDecorationLine: it?.link ? 'underline' : 'none',
                    }}>
                    {(it?.markets || []).length > 0
                      ? it.markets.join('、')
                      : it?.link
                      ? it.link
                      : '- -'}
                  </Text>
                </Flex>
              </View>
            ))}
          </View>
          <View style={{height: dip(5)}} />
          <View>
            {it.projects.map((p, j) => (
              <View key={j} style={{marginVertical: dip(4)}}>
                <Text
                  style={{
                    fontSize: dip(14),
                    color: '#000',
                    lineHeight: dip(20),
                  }}>
                  {j + 1}. {p}
                </Text>
              </View>
            ))}
          </View>
          <View style={{height: i == companies.length - 1 ? 0 : dip(24)}} />
        </View>
      ))}
    </Card>
  );
});

const styles = StyleSheet.create({
  published: {
    borderWidth: 1,
    borderRadius: dip(8),
    paddingVertical: dip(5),
    paddingHorizontal: dip(12),
    borderColor: '#999',
  },
});
export default Company;
