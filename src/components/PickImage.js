import React, { Component } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { CardSection, FormField } from './common';
import { pickImage } from '../actions';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true
  }
};

// * The first arg is the options object for customization (it can also be null or omitted for default options),
// * The second arg is the callback which sends object: response
class PickImage extends Component {
  onButtonPress () {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log ('Cancelled');
      } else if (response.error) {
        console.error(response.error);
      }
      this.props.pickImage(response.uri);
    });
  }

  render () {
    return (
      <TouchableOpacity
        style={styles.rowStyle}
        onPress={() => this.onButtonPress()}
      >
        <View>
          <CardSection>
            <View style={styles.containerStyle}>
              <Text style={styles.labelStyle}>
                Photo
              </Text>
              <View style={styles.thumbnailStyle}>
                {this.props.children}
              </View>
            </View>
          </CardSection>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  rowStyle: {
    zIndex: 2
  },
  // TODO: same styles a FormField
  labelStyle: {
    fontSize: 15,
    color: '#696969',
    paddingLeft: 10,
    flex: 1
  },
  thumbnailStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    flex: 2
  },
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
}

export default connect(null, { pickImage })(PickImage);
