import { ChangeEvent } from "react";
import { SelectChangeEvent } from '@mui/material/Select';

export interface OrderProps {
  errors: Errors,
  toggleDelivery: () => void,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  handleSelectChange: (event: SelectChangeEvent<string>) => void
  total: number
  subtotal: number
  deliveryFee: number
  serviceCharge: number
}

export interface OrderForm {
  firstName: string;
  lastName: string;
  address: string;
  postcode: string;
  isDelivery: boolean;
  time: string;
}

export interface Errors {
  firstName: string;
  lastName: string;
  address: string;
  postcode: string;
  time: string
}