import './index.css'
import { Button, Input as MuiInput } from '@mui/material'
import { Stack } from '@mui/system'
export const Input = ({ title, tipo, fundo, value, name, onChange, ...props }) => {
    return (
        <Stack className="left_stack">
            <span>{title}</span>
            <MuiInput
                style={{ color: 'white' }}
                className='input'
                type={tipo}
                placeholder={fundo}
                onChange={onChange}
                value={value}
                name={name}
                {...props}
            >
            </MuiInput>
        </Stack>

    )
}