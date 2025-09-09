import axios from "axios";

export async function getCurrencies() {
  try {
    const response = await axios.get("/currencies.json");

    const data = response.data.data;


    const currencies = Object.keys(data).map((code, index) => ({
      id: index + 1,
      name: code,
      rate: data[code].value,
    }));

    currencies.unshift({ id: 0, name: "select currency", rate: 0.0 });

    console.log(currencies);
    return currencies;
  } catch (error) {
    console.error("Something went wrong", error);
    return [];
  }
}
