# 🚧 React Native Formik Persist

> Under construction.

Project `rn-formik-persist` will be created in NPM soon.

## Requirements

- [React Native - Async Storage](https://github.com/react-native-community/async-storage);
- [Formik](https://jaredpalmer.com/formik/);

## How to Use

Load the following code in your view with formik:

```js
import useFormikPersist from 'rn-formik-persist';

useFormikPersist({
  storageKey: '@your_form_storage_key',
  setValues,
  setErrors,
  values,
  errors,
});
```

After submit your form, you could clear form just like the following:

```js
import FormikPersist from 'rn-formik-persist';

await FormikPersist.remove('@your_form_storage_key');
```
