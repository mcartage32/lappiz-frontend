import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import axiosInstance from '../axiosConfig'
import ENDPOINTS from '../endpoints'
import type { ICreateLeadPayload, ILeadsQueryParams, ILeadsResponse } from '@/interfaces'

export const useLeadsListQuery = (params: ILeadsQueryParams) => {
  return useQuery({
    queryKey: ['leadsList', params],
    queryFn: async (): Promise<ILeadsResponse> => {
      const response = await axiosInstance.get<ILeadsResponse>(ENDPOINTS.LEADS, { params })

      return response.data
    },
    placeholderData: keepPreviousData
  })
}

export const useCreateLeadMutation = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (payload: ICreateLeadPayload) => {
      const response = await axiosInstance.post(ENDPOINTS.LEADS, payload)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leadsList'] })
    }
  })
}
