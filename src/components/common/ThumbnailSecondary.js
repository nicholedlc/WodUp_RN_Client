import React from 'react';
import { Thumbnail } from 'native-base';
import { BORDER_RADIUS } from '../../styles';

const ThumbnailSecondary = props => {
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
    borderRadius: BORDER_RADIUS,
    opacity: 0.5
  }
}

export { ThumbnailSecondary };
