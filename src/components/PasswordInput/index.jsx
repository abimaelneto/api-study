import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FormControl, InputLabel, Input, InputAdornment, Box } from "@mui/material"
import { useState } from "react"

export const Password = ({ label, value, onChange, iconShow = <Visibility />, iconNotShow = <VisibilityOff /> }) => {

    const [showPassword, setShowPassword] = useState(false)

    const handleToggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
            {label}
        </InputLabel>
        <Input
            id="input-with-icon-adornment"
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            endAdornment={
                <InputAdornment position="end">
                    <Box onClick={handleToggleShowPassword}>{showPassword ? iconShow : iconNotShow}</Box>
                </InputAdornment>
            }
        />
    </FormControl>
}