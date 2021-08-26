import axios from "axios";

export async function loginUser(dispatch: any, loginPayload: any) {
  const body = JSON.stringify(loginPayload);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const response = await axios.post(
      "http://vienhealth.alcax.com:5000/api/doctor/login",
      body,
      config
    );

    if (response.data) {
      const {
        data: {
          data: { token, doctor, type, admin },
        },
      } = response;
      console.log(token);
      const doctorData = {
        doctor,
        type,
        admin,
        token,
      };
      dispatch({ type: "LOGIN_SUCCESS", payload: doctorData });
      localStorage.setItem("userToken", JSON.stringify(token));
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ doctor, type, admin })
      );
      return doctorData;
    }

    dispatch({ type: "LOGIN_ERROR", errorMessage: response.data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", errorMessage: error });
  }
}

export async function logout(dispatch: any) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("userToken");
}
