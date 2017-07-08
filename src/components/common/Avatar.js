import React from 'react';
import { View } from 'react-native';
import { Thumbnail } from 'native-base';

const Avatar = props => {
  return (
    <View style={styles.viewStyle}>
      <Thumbnail
        style={styles.thumbnailStyle}
        source={props.source}
        large
      />
    </View>
  );
}

const styles = {
  viewStyle: {
    alignSelf: 'flex-end',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    zIndex: 5
  },
  thumbnailStyle: {
    borderWidth: 1,
    borderColor: 'white'
  }
};

export { Avatar };
