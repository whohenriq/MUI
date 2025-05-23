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

      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>
          {music.title} - {music.artist}
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>Álbum: {music.album}</Typography>
          <Typography gutterBottom>{music.description}</Typography>
          <Button
            href={music.link}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{ mt: 2 }}
          >
            🔗 Ouvir no Spotify
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
