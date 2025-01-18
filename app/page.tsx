"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [recipe, setRecipe] = useState({
        image: "",
        title: "",
        description: "",
        preparationTime: "",
        cookingTime: "",
        totalPrepTime: "",
        ingredients: [],
        instructions: [],
        nutrition: {
            calories: "",
            carbs: "",
            protein: "",
            fat: "",
        },
    });

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                setRecipe(data);
            });
    }, []);

    console.log(recipe);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#FFFFFF",
                    marginTop: "5rem",
                    padding: "2rem",
                    borderRadius: "1rem",
                }}
            >
                <Image
                    src={recipe.image}
                    width={600}
                    height={300}
                    alt="Omelette"
                ></Image>
                <Typography>{recipe.title}</Typography>
                <Typography>{recipe.description}</Typography>

                <Box>
                    <Typography>Preperation Time</Typography>
                    <Typography>{recipe.totalPrepTime}</Typography>
                    <Typography>{recipe.preparationTime}</Typography>
                    <Typography>{recipe.cookingTime}</Typography>
                </Box>

                <Box>
                    <Typography
                        sx={{
                            color: "#854632",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Ingredients
                    </Typography>
                    {recipe.ingredients.map((ingredient) => {
                        return (
                            <Typography key={ingredient}>
                                {ingredient}
                            </Typography>
                        );
                    })}
                </Box>

                <Box>
                    <Typography
                        sx={{
                            color: "#854632",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Instructions
                    </Typography>
                    {recipe.instructions.map((instruction) => {
                        return (
                            <Typography key={instruction}>
                                {instruction}
                            </Typography>
                        );
                    })}
                </Box>

                <Box>
                    <Typography
                        sx={{
                            color: "#854632",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Nutrition
                    </Typography>
                </Box>
                <Typography>
                    The table below shows nutritional value per serving without
                    the additional fillings
                </Typography>
                <Typography>{recipe.nutrition.calories}</Typography>
            </Box>
        </Box>
    );
};

export default Home;
