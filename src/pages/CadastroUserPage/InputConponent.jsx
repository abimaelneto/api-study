import './index.css'
import { Button, Input } from '@mui/material'
import { Stack } from '@mui/system'
export const InputConponent = ({ title, tipo, fundo, value, name, onChange }) => {
    return (
        <Stack className="left_stack">
            <span>{title}</span>
            <Input
                style={{ color: 'white' }}
                className='input'
                type={tipo}
                placeholder={fundo}
                onChange={onChange}
                value={value}
                name={name}
            >
            </Input>
        </Stack>

    )
}