import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../../http";

export const eventApi = createApi({
  reducerPath: "eventApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, credentials: "include" }),
  tagTypes: ["Event"],
  endpoints: (build) => ({
    getEvents: build.query({
      query: () => ({
        url: "/event",
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: "Event", id })),
                { type: "Event", id: "LIST" },
              ]
            : [{ type: "Event", id: "LIST" }],
      }),
    }),
    create: build.mutation({
      query: (body) => ({
        url: "/event",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Event", id: "LIST" }],
    }),
    update: build.mutation({
      query: (body) => ({
        url: "/event",
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: "Event", id: "LIST" }],
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `/event/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Event", id: "LIST" }],
    }),
  }),
});

export const { useCreateMutation, useGetEventsQuery, useDeleteEventMutation, useLazyGetEventsQuery } =
  eventApi;
