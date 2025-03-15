export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key':'cd8281e4d0msh3013380ddba72efp1d754fjsnc6ce31acab2b',
        'X-RapidAPI-Host':'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers
    })

    const result = await response.json();
    return result
}