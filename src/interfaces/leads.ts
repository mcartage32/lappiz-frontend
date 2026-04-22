export interface ILead {
  id: number
  name: string
  email: string
  createdAt: string
}

export interface ILeadsResponse {
  data: ILead[]
  total: number
  page: number
  limit: number
}

export interface ILeadsQueryParams {
  page?: number
  limit?: number
}

export interface ICreateLeadPayload {
  name: string
  email: string
}
