import {Dimensions} from 'react-native';

const dip = (n: number) => {
  return (n * Dimensions.get('screen').width) / 750;
};

export {dip};
