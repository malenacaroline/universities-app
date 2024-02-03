import { ref } from "vue";

export const useUniversitiesData = () => {
  const searchName = ref("");
  const searchCountry = ref("Canada");

  const { data } = useFetch("http://universities.hipolabs.com/search", {
    query: { name: searchName, country: searchCountry },
    onRequest() {
      console.info("*** Performance Tracking ***");
      console.log("Search Name:", searchName.value);
      console.log("Search Country:", searchCountry.value);
      console.time('TTR');
    },
    onResponse(context) {
      console.log("status code:", context.response.status);
      console.timeEnd('TTR');
    },
    
  });
  let favUniversities = {};

  if (typeof window !== "undefined")
    favUniversities = ref(
      JSON.parse(localStorage.getItem("universities") || "{}")
    );

  const clearFilters = () => {
    searchName.value = "";
    searchCountry.value = "Canada";
  };

  return {
    clearFilters,
    favUniversities,
    searchCountry,
    searchName,
    universities: data,
  };
};
