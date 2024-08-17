export interface UserResponse {
  idUser: number,
  name: string,
  email: string,
  comida: string
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
