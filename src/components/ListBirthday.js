import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionBar from './ActionBar';
import AddBirthday from './AddBirthday';
import firebase from '../utils/firebase';
import 'firebase/firestore';

const db = firebase.firestore(firebase);

export default function ListBirthday(props) {
  const {user} = props;
  const [showList, setShowList] = useState(true);
  const [birthday, setBirthday] = useState([]);

  console.log(birthday);

  useEffect(() => {
    setBirthday([]);
    db.collection(user.uid)
      .orderBy('dateBirth', 'asc')
      .get()
      .then((response) => {
        const itemsArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          itemsArray.push(data);
        });
        setBirthday(itemsArray);
      });
  }, []);

  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <Text>List</Text>
          <Text>List</Text>
          <Text>List</Text>
          <Text>List</Text>
          <Text>List</Text>
        </>
      ) : (
        <AddBirthday user={user} setShowList={setShowList} />
      )}
      <ActionBar setShowList={setShowList} showList={showList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
});
