import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../http";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    credentials: "include",
  }),
  endpoints: (build) => ({
    create: build.mutation({
      query: (formData) => ({
        url: "/news",
        method: "POST",
        body: formData,
      }),
    }),
    update: build.mutation({
      query: (body) => ({
        url: "/news",
        method: "PUT",
        body,
      }),
    }),
    deleteNews: build.mutation({
      query: (id) => ({
        url: `/news/${id}`,
        method: "DELETE",
      }),
    }),
    getNews: build.query({
      query: () => ({
        url: "/news",
      }),
    }),
  }),
});

export const {
  useCreateMutation,
  useDeleteNewsMutation,
  useGetNewsQuery,
  useUpdateMutation,
} = newsApi;
