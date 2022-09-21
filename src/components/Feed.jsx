import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../uitls/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "col",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: {
            sx: "auto",
            md: "92vh",
          },
          borderRight: "1px solid #3d3d3d",
          padding: {
            sx: 0,
            md: 2,
          },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ marginTop: 1.5, color: "#fff" }}
        >
          Copyright 2022 @ Vishnunadh
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          mb={2}
          sx={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {selectedCategory}{" "}
          <span
            style={{
              color: "#f31503",
            }}
          >
            videos
          </span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
