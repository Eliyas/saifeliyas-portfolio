import Header from "@/components/Header";
import data from "@/data/data";
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



export const getStaticProps = async () => {
  const staticData = data;
  return {
    props: { data: staticData }
  };
};