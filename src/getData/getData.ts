import axios from "axios";
import mapArrToStrings from "../mapArrToStrings/mapArrToStrings";

const getData = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = data.map((item) => item.id);

    return mapArrToStrings(userIds);
  } catch (error) {
    return [];
  }
};

export default getData;
