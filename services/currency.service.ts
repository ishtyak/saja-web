let currencyData:any = null;

async function initializeCurrency(baseCurrency = "USD") {
  debugger
  if (currencyData) {

    return currencyData;
  }

  try {
    debugger
    const locationResponse = await fetch("https://ipapi.co/json/");

    if (!locationResponse.ok) {
      throw new Error("Failed to get location");
    }

    const location = await locationResponse.json();

    const userCurrency = location.currency;

    if (!userCurrency) {
      throw new Error("Currency not found");
    }

    let exchangeRate = 1;
    let currency_details = { symbol: "$" }

    if (userCurrency !== baseCurrency) {
      
      // const exchangeResponse = await fetch(
      //   `https://api.frankfurter.app/latest?from=${baseCurrency}&to=${userCurrency}`
      // );

      const currencySymbols = await fetch("https://allratestoday.com/api/v1/symbols").then(r => r.json());
      currency_details = currencySymbols?.currencies?.find((c:any) => c.code == userCurrency)
      const exchangeResponse = await fetch(`https://www.currencyexchangetool.com/api/v1/convert?amount=1&from=${baseCurrency}&to=${userCurrency}`);

      if (!exchangeResponse.ok) {
        throw new Error("Failed to get exchange rate");
      }

      const exchangeData = await exchangeResponse.json();

      exchangeRate = exchangeData?.rate
    }

    currencyData = {
      currency: userCurrency,
      currencyName: location?.currency_name,
      currencySymbol: location?.currency_symbol || currency_details?.symbol,
      country: location?.country_name,
      countryCode: location?.country_code,
      exchangeRate,
      baseCurrency
    };

    return currencyData;

  } catch (error:any) {
    console.error("Currency initialization failed:", error);

    currencyData = {
      currency: baseCurrency,
      exchangeRate: 1,
      baseCurrency,
      error: error.message as any
    };

    return currencyData;
  }
}

export default initializeCurrency