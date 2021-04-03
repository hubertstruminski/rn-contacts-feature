import { Alert, PermissionsAndroid } from 'react-native';
import * as Contacts from 'expo-contacts';
import { CONTACTS_DATA, CONTACTS_DATA_ANDROID } from '../constants/Mocks';
import ContactsAndroid from 'react-native-contacts';

export const addContactsWithGroup = async () => {  
  await Contacts.requestPermissionsAsync();
  const { status } = await Contacts.getPermissionsAsync();

  if(status === 'granted') {
    const defaultContainerId = await Contacts.getDefaultContainerIdAsync();
    const newGroupId = await Contacts.createGroupAsync('ContactsFeature', defaultContainerId);

    CONTACTS_DATA.forEach(async (contact) => {
      const contactId = await Contacts.addContactAsync(contact, defaultContainerId);
      await Contacts.addExistingContactToGroupAsync(contactId, newGroupId);
    });
    Alert.alert('Info', `You have been added ${CONTACTS_DATA.length} contacts to new \'ContactsFeature\' group.`);
  } else {
    Alert.alert('Warning', 'You rejected permissions apply.');
  }
}

export const addContactsAndroid = () => {
  const result = [];
  PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_CONTACTS, PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS])
  .then(response => {
    if(response["android.permission.READ_CONTACTS"] === 'granted' && response["android.permission.WRITE_CONTACTS"] === 'granted') {
      CONTACTS_DATA_ANDROID.forEach((contact) => {
        ContactsAndroid.addContact(contact).then(response => {
          const  { recordID } = response;
          result.push(recordID);
        });
      });
      Alert.alert('Info', `You have been added ${CONTACTS_DATA_ANDROID.length} contacts.`);
    } else {
      Alert.alert('Warning', 'You rejected permissions apply.');
    }
  });
  return result;
}

export const removeContactsWithGroup = async () => {
  const groupsToRemove =  await Contacts.getGroupsAsync({ groupName: 'ContactsFeature' });
  groupsToRemove.forEach(async (group) => {
    const  { id } = group;
    const { data } = await Contacts.getContactsAsync({ groupId: id });

    if(data.length > 0) {
      data.forEach(async (contact) => {
        const { id } = contact;
        await Contacts.removeContactAsync(id);
      });
    }
  });
  groupsToRemove.forEach(async (group) => await Contacts.removeGroupAsync(group.id));
  if(groupsToRemove.length > 0) {
    Alert.alert('Info', 'Previously added contacts has been removed.');
  } else {
    Alert.alert('Info', 'No contacts found.');
  }
}

export const removeContactsAndroid = (contactIds) => {
  if(contactIds.length > 0) {
    contactIds.forEach((contactId) => ContactsAndroid.deleteContact({ recordID: contactId }));
    Alert.alert('Info', 'Previously added contacts has been removed.');
  } else {
    Alert.alert('Info', 'No contacts found.');
  }
}