import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

export const useInitFlowbite = () => {
  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
};
