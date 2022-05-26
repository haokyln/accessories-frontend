import axios from 'axios';

type User = {
  accessKey: string;
};

type GetUsersResponse = {
  data: User[];
};

async function doLogin(path: string, dataForm: object) {
  try {
    const { data, status } = await axios.post<GetUsersResponse>(path, dataForm);
    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export default doLogin;
