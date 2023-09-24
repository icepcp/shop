import Link from "next/link";
import { Box } from '@mui/material'
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

export const metadata = {
    title: "404 - Page Not Found | icepcp's shop",
};

export default function NotFound() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh" // Ensures the box takes up the full viewport height
        >
            <Typography variant="h1">404</Typography>
            <Typography variant="h4">Page Not Found</Typography>
            <Typography variant="body1">Sorry, the page you requested does not exist.</Typography>
            <Link href={'/'} style={{ paddingTop: '1rem' }}>
                <Button variant="contained">Go back home</Button>
            </Link>
        </Box>
    )
}
