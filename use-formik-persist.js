import { useEffect } from 'react';
import FormikPersist from './formik-persist';

function useFormikPersist({
  storageKey,
  setValues,
  setErrors,
  values = {},
  errors = {},
}) {
  const loadPersistedFields = async () => {
    const data = await FormikPersist.getData(storageKey);

    if (data) {
      setValues(data.values);
      setErrors(data.errors);
    }
  };

  useEffect(() => {
    loadPersistedFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      await FormikPersist.setData(storageKey, values, errors);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values, errors]);

  return [values, errors];
}

export default useFormikPersist;
