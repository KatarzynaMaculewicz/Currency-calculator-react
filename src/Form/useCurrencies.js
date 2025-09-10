import { useState, useEffect } from "react";
import { getCurrencies } from "./getCurrencies";

export function useCurrencies(delay = 1000) {
  const [ratesData, setRatesData] = useState({
    rates: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let loadingTimeout;

    async function fetchCurrencies() {
      try {
        setRatesData({ rates: [], loading: true, error: null });

        const data = await getCurrencies();

        loadingTimeout = setTimeout(() => {
          setRatesData({ rates: data, loading: false, error: null });
        }, delay);
      } catch (error) {
        setRatesData({
          rates: [],
          loading: false,
          error:
            "🔌 Uh-oh! We couldn’t load the currency data. Make sure your connection is stable or give it another shot later. 🔌",
        });
      }
    }

    fetchCurrencies();

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [delay]);

  return ratesData;
}
