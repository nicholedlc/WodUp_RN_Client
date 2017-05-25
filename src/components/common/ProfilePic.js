import React from 'react';
import { Thumbnail } from 'native-base';

const ProfilePic = props => {
  return (
    <Thumbnail
      style={props.style}
      source={props.source}
      style={styles.thumbnailStyle}
      large
    />
  );
}

export { ProfilePic };
