import axios from "axios";
import { API_HOST } from "../config/config";

interface SpecialityResponseModel {
  status: string;
  specialities: SpecialityModel[];
}

interface SpecialityModel {
  id: "string";
  name: "string";
}

const getAllSpecialities = () => {
  return axios
    .get(`${API_HOST}/api/v1/speciality`)
    .then((res) => res.data as SpecialityResponseModel)
    .then((data) => data.specialities)
    .catch((error) => console.log(`[error]: ${error}`));
};

export { getAllSpecialities };
