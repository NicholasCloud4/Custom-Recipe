"use client";

import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Nutrition from "./components/Nutrition";

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
                setRecipe(data);
            });
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f7f5f2",
                padding: "2rem",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "1rem",
                    padding: "2rem",
                    maxWidth: "800px",
                    width: "100%",
                }}
            >
                {recipe.image && (
                    <Image
                        src={recipe.image}
                        width={800}
                        height={400}
                        alt={recipe.title || "Recipe Image"}
                        style={{ borderRadius: "0.5rem" }}
                    />
                )}

                <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                        fontWeight: "bold",
                        marginTop: "1.5rem",
                        color: "#2b2b2b",
                        textAlign: "center",
                    }}
                >
                    {recipe.title || "Delicious Recipe"}
                </Typography>

                <Typography
                    sx={{
                        marginTop: "1rem",
                        color: "#555555",
                        textAlign: "center",
                        lineHeight: 1.6,
                    }}
                >
                    {recipe.description}
                </Typography>

                <Box sx={{ marginTop: "2rem" }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "#854632",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Preparation Details
                    </Typography>
                    <Typography>
                        Total Preparation Time: {recipe.totalPrepTime || "N/A"}
                    </Typography>
                    <Typography>
                        Preparation Time: {recipe.preparationTime || "N/A"}
                    </Typography>
                    <Typography>
                        Cooking Time: {recipe.cookingTime || "N/A"}
                    </Typography>
                </Box>

                <Box sx={{ marginTop: "2rem" }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "#854632",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Ingredients
                    </Typography>
                    {recipe.ingredients.length > 0 ? (
                        recipe.ingredients.map((ingredient, index) => (
                            <Typography key={index} sx={{ color: "#555555" }}>
                                - {ingredient}
                            </Typography>
                        ))
                    ) : (
                        <Typography>No ingredients listed.</Typography>
                    )}
                </Box>

                <Box sx={{ marginTop: "2rem" }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "#854632",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Instructions
                    </Typography>
                    {recipe.instructions.length > 0 ? (
                        recipe.instructions.map((instruction, index) => (
                            <Typography
                                key={index}
                                sx={{
                                    color: "#555555",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {index + 1}. {instruction}
                            </Typography>
                        ))
                    ) : (
                        <Typography>No instructions provided.</Typography>
                    )}
                </Box>

                <Box sx={{ marginTop: "2rem" }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            color: "#854632",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Nutrition
                    </Typography>
                    <Typography sx={{ color: "#555555", marginBottom: "1rem" }}>
                        Nutritional values per serving (without additional
                        fillings):
                    </Typography>
                    <Nutrition
                        category="Calories"
                        value={recipe.nutrition.calories || "N/A"}
                    />
                    <Nutrition
                        category="Carbs"
                        value={recipe.nutrition.carbs || "N/A"}
                    />
                    <Nutrition
                        category="Protein"
                        value={recipe.nutrition.protein || "N/A"}
                    />
                    <Nutrition
                        category="Fat"
                        value={recipe.nutrition.fat || "N/A"}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
