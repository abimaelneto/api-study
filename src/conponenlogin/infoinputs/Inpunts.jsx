import { Input as Inputs } from "@mui/material";
import { Stack } from "@mui/material";
export const InputConponentLogin = (
    {
        title,
        nome,
        tipo,
        placeholder,
        required,
        autoComplete,
        icon
    }
) => {
    return (
        <>
            <div className="left_stack_login">
                <Stack
                    style={{
                        width: "100%"
                    }}
                    className="left_stack">
                    <span>{title}</span>
                    <Inputs
                        style={{ color: 'white' }}
                        className='input'
                        name={nome}
                        type={tipo}
                        placeholder={placeholder}
                        required={required}
                        autoComplete={autoComplete}
                    />

                </Stack>
                {icon}
            </div>
        </>
    )
}