import { Card as CardMUI, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
const classMedia = () => {
    return {
        pt: '56%'
    }
}

const Card = ({ image, title, subtitle, actions }) => {
    return (
        <CardMUI>
            <CardMedia
                //https://source.unsplash.com/random
                image={image}
                title={title}
                sx={classMedia}
            />
            <CardContent>
                <Typography variant='h5' component='h2'>
                    {title}
                </Typography>
                <Typography >
                    {subtitle}
                </Typography>
            </CardContent>
            {
                actions
                    ?
                    (
                        actions
                    ) : null
            }

        </CardMUI>
    )
}
export default Card;