'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const cardData = [
  {
    id: 1,
    imageSrc: '/screen-protector.webp',
    linkUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdwcTsD9Cteq4dMBhhOdsAYMBbbNmsn5n9-EdTNllgZ_X0Jdw/viewform?usp=sf_link',
    title: 'screen protector',
    description: 'get your tempered screen protector on the spot, with a flat rate of $5',
  },
    {
        id: 2,
        imageSrc: '/phone-repair.webp',
        linkUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-lyWexwjSKF_GJoE-2urP31eJNYhP-pdgF7b2A5KtYAL2_w/viewform?usp=sf_link',
        title: 'phone repair',
        description: 'phone repair prices are not fixed, i will let you know the price after submission',
    },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  // Filter cards based on the search query
  const filteredCards = cardData.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

  return (
      <Box>
        <div style={{ padding: '0.5rem 0rem 1rem' }}>
          <TextField
              id="input-with-icon-textfield"
              label="search"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                ),
              }}
              variant="outlined"
          />
        </div>
        <Grid container spacing={2}>
          {filteredCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <Card>
                  <CardActionArea>
                    <Link href={card.linkUrl} style={{textDecoration: "none",}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={card.imageSrc}
                            alt={card.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: '#212121' }}>
                          {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {card.description}
                        </Typography>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Box>
  );
}
