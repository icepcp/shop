import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
export const metadata = {
    title: "icepcp's shop",
    description: 'amazing products for cheap',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeRegistry>
            <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                <Toolbar sx={{ backgroundColor: 'background.paper' }}>
                    <Link href={'/'}
                          style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                    }}>
                        <ShoppingBagIcon sx={{ color: '#444', mr: 2, transform: 'translateY(-2px)' }} />
                        <Typography variant="h6" noWrap component="div" color="black" style={{paddingBottom: '2px'}}>
                            icepcp's shop
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                    mt: ['48px', '56px', '64px'],
                    p: 3,
                }}
            >
                {children}
            </Box>
        </ThemeRegistry>
        </body>
        </html>
    );
}
