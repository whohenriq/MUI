import { Music } from "@/types/music";
import Icon from "@mui/material/Icon";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface MusicCardProps {
  music: Music;
  onGenerate: () => void;
  onOpenModal: () => void;
}

export function MusicCard({ music, onGenerate, onOpenModal }: MusicCardProps) {
  return (
    <Card sx={{ maxWidth: 345, textAlign: "center", p: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={music.cover}
        alt={music.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={600}>
          {music.title}
          <Icon>music_note</Icon>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" fontWeight={400}>
          🎤 {music.artist}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Álbum: {music.album} <Icon>lyrics</Icon>
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" gap={2} pb={2}>
        <Button variant="contained" color="primary" onClick={onGenerate}>
          Gerar Música Aleatória
        </Button>
        <Button variant="outlined" onClick={onOpenModal}>
          Ver Detalhes
        </Button>
      </Box>
    </Card>
  );
}
