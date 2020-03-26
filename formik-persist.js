import AsyncStorage from '@react-native-community/async-storage';

class FormikPersist {
  static async setData(storageKey, values, errors) {
    return await AsyncStorage.setItem(
      storageKey,
      JSON.stringify({ values, errors }),
    );
  }

  static async getData(storageKey) {
    const result = await AsyncStorage.getItem(storageKey);
    return JSON.parse(result);
  }

  static async remove(storageKey) {
    return await AsyncStorage.removeItem(storageKey);
  }
}

export default FormikPersist;
