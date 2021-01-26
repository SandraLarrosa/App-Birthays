import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Alert, Text} from 'react-native';
import moment from 'moment';
import ActionBar from './ActionBar';
import AddBirthday from './AddBirthday';
import firebase from '../utils/firebase';
import 'firebase/firestore';
import Birthday from './Birthday';

const db = firebase.firestore(firebase);

export default function ListBirthday(props) {
  const {user} = props;
  const [showList, setShowList] = useState(true);
  const [birthday, setBirthday] = useState([]);
  const [pasatBirthday, setPasatBirthday] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    setBirthday([]);
    setPasatBirthday([]);
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
        formData(itemsArray);
      });
    setReloadData(false);
  }, [reloadData]);

  const formData = (items) => {
    //Obtención de la fecha del día
    const currentDate = moment().set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    const birthdayTempArray = [];
    const pasatBirthdayTempArray = [];

    items.forEach((item) => {
      //Iteramos todas las fechas que recibimos de la base de datos
      const dateBirth = new Date(item.dateBirth.seconds * 1000);
      const dateBirthday = moment(dateBirth);
      const currentYear = moment().get('year');
      dateBirthday.set({year: currentYear}); //formateo de fechas

      const diffDate = currentDate.diff(dateBirthday, 'days'); //Diferencia entre los días con el actual.
      const itemTemp = item;
      itemTemp.dateBirth = dateBirthday;
      itemTemp.days = diffDate;

      if (diffDate <= 0) {
        //Comparación de fechas
        birthdayTempArray.push(itemTemp);
      } else {
        pasatBirthdayTempArray.push(itemTemp);
      }
    });
    setBirthday(birthdayTempArray);
    setPasatBirthday(pasatBirthdayTempArray);
  };

  const deleteBirthday = (birthday) => {
    Alert.alert(
      'Eliminar cumpleaños',
      `¿Estás seguro de eliminar el cumpleaños de ${birthday.name} ${birthday.lastName}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            db.collection(user.uid)
              .doc(birthday.id)
              .delete()
              .then(() => {
                setReloadData();
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.titleBirthdays}>Cumpleaños: </Text>
            {birthday.map((item, index) => (
              <Birthday
                key={index}
                birthday={item}
                deleteBirthday={deleteBirthday}
              />
            ))}
            <Text style={styles.titleBirthdays}>Cumpleaños pasados: </Text>
            {pasatBirthday.map((item, index) => (
              <Birthday
                key={index}
                birthday={item}
                deleteBirthday={deleteBirthday}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <AddBirthday
          user={user}
          setShowList={setShowList}
          setReloadData={setReloadData}
        />
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
  scrollView: {
    marginBottom: 50,
    width: '100%',
  },
  titleBirthdays: {
    color: 'white',
    margin: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
