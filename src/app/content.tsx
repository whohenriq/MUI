"use client";

import { useState } from "react";

import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { MUSIC_LIST } from "@/const/musics";
import { MusicCard } from "@/components/music-card";

export function Content() {
  const [music, setMusic] = useState(MUSIC_LIST[0]);
  const [open, setOpen] = useState(false);

  const handleGenerate = () => {
    const random = Math.floor(Math.random() * MUSIC_LIST.length);
    setMusic(MUSIC_LIST[random]);
  };

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <MusicCard
        music={music}
        onGenerate={handleGenerate}
        onOpenModal={handleOpenModal}
      />

      <Dialog
        open={open}
        onClose={handleCloseModal}
        PaperProps={{
          sx: { borderRadius: 3, p: 2, minWidth: 350 },
        }}
      >
        <DialogTitle>
          {music.title} - {music.artist}
        </DialogTitle>

        <DialogContent>
          <Box className="flex flex-col items-start">
            <Typography
              variant="subtitle2"
              color="text.secondary"
              textAlign="center"
              mb={1}
            >
              Álbum: {music.album}
            </Typography>

            <Typography variant="body2" textAlign="center" mb={2}>
              {music.description}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Button
              href={music.link}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              color="success"
              startIcon={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
                  alt="Spotify"
                  width={20}
                  height={20}
                />
              }
            >
              Ouvir no Spotify
            </Button>
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
