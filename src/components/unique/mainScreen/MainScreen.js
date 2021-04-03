import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { 
  DANGER_BUTTON_COLOR, 
  SUCCESS_BUTTON_COLOR 
} from '../../../constants/Colors';
import Button from '../../common/button/Button';
import styles from './mainScreenStyle';
import { 
  addContactsWithGroup, 
  removeContactsAndroid, 
  removeContactsWithGroup,
  addContactsAndroid 
} from '../../../api/ContactApi';
import {
   ADD_BUTTON_LABEL, 
   REMOVE_BUTTON_LABEL 
} from '../../../constants/Labels';

const MainScreen = () => {
  const [contactIds, setContactIds] = useState([]);

  const addContacts = () => {
    if(Platform.OS === 'android') {
      const result = addContactsAndroid();
      setContactIds(result);
    } else {
      addContactsWithGroup();
    }
  }

  const removeContacts = () => {
    if(Platform.OS === 'android') {
      removeContactsAndroid(contactIds);
      setContactIds([]);
    } else {
      removeContactsWithGroup();
    }
  }

  return (
    <View style={styles.container}>
      <Button 
        title={ADD_BUTTON_LABEL} 
        onPress={addContacts} 
        backgroundColor={SUCCESS_BUTTON_COLOR} 
      />
      <Button 
        title={REMOVE_BUTTON_LABEL}
        onPress={removeContacts} 
        backgroundColor={DANGER_BUTTON_COLOR} 
      />
    </View>
  );
}

export default MainScreen;