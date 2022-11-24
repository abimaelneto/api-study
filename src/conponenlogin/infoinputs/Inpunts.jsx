import { Input as Inputs } from "@mui/material";
import { Stack } from "@mui/material";
export const InputConponentLogin = (
    {
        title,
        icon,
        ...props
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
                        className='input'
                        {...props}
                    />

                </Stack>
                {icon}
            </div>
        </>
    )
}