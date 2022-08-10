import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const weatherHeaders = {
  'X-RapidAPI-Key': '65df072934msh14af832281348a6p1c224djsn87f4899cc1e0',
  'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
};

const baseUrl = 'https://yahoo-weather5.p.rapidapi.com'
const createRequest = (url) => ({url , headers: weatherHeaders})

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getWeather: builder.query({
        query:(location) => createRequest(`/weather?location=${location}`)
      })
    })
})

export const {useGetWeatherQuery} = weatherApi