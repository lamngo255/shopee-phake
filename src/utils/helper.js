export const isEmail = value => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(value);
};

// currying
export const payloadCreator = asyncFunc => async (arg, thunkApi) => {
  try {
    const res = await asyncFunc(arg);
    return res;
  } catch (err) {
    return thunkApi.rejectWithValue(err);
  }
};
