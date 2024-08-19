export interface UserResponse {
  idUser: number,
  name: string,
  email: string,
}
export interface UserRequest {
  name: string | null,
  email: string | null,
}

export interface BalanceResponse {
  idAccount: number,
  idUser: number,
  balance: number,
}

export interface TransactionResponse {
  idAccount: number,
  idTransaction: number,
  amount: number,
  description: string,
}
