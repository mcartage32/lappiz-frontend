export interface ILead {
  id: number
  name: string
  email: string
  createdAt: string
}

export interface ICreateLeadPayload {
  name: string
  email: string
}
