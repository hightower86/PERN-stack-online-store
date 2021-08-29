import { $host, $authHost } from "./index";

export const createType = async (type) => {
  try {
    const { data } = await $authHost.post("api/type", type);
    return data;
  } catch (error) {
    return window.alert(error?.response?.message);
  }
};

export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const createBrand = async (brand) => {
  try {
    const { data } = await $authHost.post("api/brand", brand);
    return data;
  } catch (error) {
    return window.alert(error?.response?.message);
  }
};

export const fetchBrands = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};
