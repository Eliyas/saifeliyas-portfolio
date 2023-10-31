import Header from "@/components/Header";
import { BASE_URL } from "@/utils";
import axios from "axios";

const Search = () => {
  return ( 
    <>
      <Header label="Search" />
    </>
   );
}
 
export default Search;



export const getServerSideProps = async () => {
  
  let response = await axios.get(`${BASE_URL}/api/data`);
  return {
    props: { data: response.data }
  };
};