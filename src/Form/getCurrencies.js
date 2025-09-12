import axios from "axios";

export async function getCurrencies() {
  try {
    const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_2kgH8LVC7c6OYrmDxqL8ZL1HmdncEFslSZ7XjgSA&currencies=GBP%2CEUR%2CUSD%2CPLN%2CCAD%2CJPY%2CAUD%2CCHF%2CNZD%2CRUB%2CMXN%2CZAR%2CSEK%2CNOK%2CDKK%2CCZK%2CRON%2CBGN%2CHRK%2CTRY%2CSGD&base_currency=GBP");

    const data = response.data.data;

    const currencies = Object.keys(data).map((code, index) => ({
      id: index + 1,
      name: code,
      rate: data[code].value,
    }));

    currencies.unshift({ id: 0, name: "select currency", rate: 0.0 });

    return currencies;
  } catch (error) {
    throw error;
  }
}
