import { ref } from "vue";

export const useForm = () => {
  const searchName = ref("");
  const searchCountry = ref("Canada");

  const { data } = useFetch("http://universities.hipolabs.com/search", {
    query: { name: searchName, country: searchCountry },
  });

  const clearFilters = () => {
    searchName.value = "";
    searchCountry.value = "Canada";
  };

  return { searchName, searchCountry, universities: data, clearFilters };
};
