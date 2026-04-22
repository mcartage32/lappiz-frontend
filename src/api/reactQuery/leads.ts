import { useQuery, keepPreviousData, useMutation, useQueryClient } from '@tanstack/react-query'
import axiosInstance from '../axiosConfig'
import ENDPOINTS from '../endpoints'
import type { ICreateLeadPayload, ILead } from '@/interfaces'

export const useLeadsListQuery = () => {
  return useQuery({
    queryKey: ['leadsList'],
    queryFn: async (): Promise<ILead[]> => {
      const response = await axiosInstance.get<ILead[]>(ENDPOINTS.LEADS)
      return response.data
    },
    placeholderData: keepPreviousData
  })
}

export const useCreateAppointmentMutation = () => {
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
