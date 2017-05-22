import React from 'react';
import { Thumbnail } from 'native-base';
import { BORDER_RADIUS } from '../../styles';

const ThumbnailPrimary = props => {
  return (
    <Thumbnail
      source={props.source}
      style={styles.thumbnailStyle}
      small
      square
    />
  );
}

const styles = {
  thumbnailStyle: {
    borderRadius: BORDER_RADIUS
  }
}

export { ThumbnailPrimary };
