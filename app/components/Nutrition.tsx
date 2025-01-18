import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface Props {
    category: string;
    value: string;
}

export default function Nutrition({ category, value }: Props) {
    return (
        <Box sx={{ margin: "1rem" }}>
            <Typography>{category}</Typography>
            <Typography sx={{ fontWeight: "bold", color: "#854632" }}>
                {value}
            </Typography>
            <hr />
        </Box>
    );
}
