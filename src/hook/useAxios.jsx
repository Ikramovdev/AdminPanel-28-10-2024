import axios from "axios";
import { HTTP } from "./useENV";




export const useAxios = () => axios.create({baseURL:HTTP})