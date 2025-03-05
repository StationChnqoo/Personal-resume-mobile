import {Card, Flex} from '@src/components';
import {companies} from '@src/constants/c';
import {TCompany} from '@src/constants/t';
import {dip} from '@src/constants/u';
import {Text, View} from 'react-native';

interface MyProps {}

const Company: React.FC<MyProps> = props => {
  return (
    <Card>
      {companies.map((it, i) => (
        <View key={i}>
          <Flex horizontal justify="space-between">
            <Text style={{fontSize: dip(16), color: '#333'}}>{it.parent}</Text>
            <Text style={{fontSize: dip(14), color: '#333'}}>{it.date}</Text>
          </Flex>
          {it.children.length > 0 ? (
            <Flex horizontal justify="flex-start" style={{marginTop: dip(12)}}>
              <Text style={{fontSize: dip(14), color: '#666'}}>
                {it.children.join('、')}
              </Text>
            </Flex>
          ) : null}
          <View style={{height: dip(5)}} />
          <View>
            {it.published.map((it, i) => (
              <View key={i} style={{marginVertical: dip(4)}}>
                <Flex justify="space-between" horizontal>
                  <Text style={{color: '#333', fontSize: dip(14)}}>
                    {it.label}
                  </Text>
                  <Text style={{color: '#666', fontSize: dip(14)}}>
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
          <View>
            {it.projects.map((p, j) => (
              <View key={j} style={{marginVertical: dip(4)}}>
                <Text
                  style={{
                    fontSize: dip(14),
                    color: '#666',
                    lineHeight: dip(18),
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
};

export default Company;
