import styled from "@emotion/styled";
import { reviewListData } from "../../data/data";
import { Box, Grid2, Paper, Stack, Typography } from "@mui/material";

const ReviewCards = () => {
  return (
    <Grid2 container spacing={2}>
      {reviewListData.map(({ id, name, email, avatar, review }) => {
        return (
          <Grid2 key={id} size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper
              sx={{
                height: "100%",
                border: "1px solid #E5E7EB",
                boxShadow: "none",
                borderRadius: 5,
                px: 3,
                py: 3,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <Box>
                  <AvatarImg
                    // width="40px"
                    // height="40px"
                    // style={{ objectFit: "cover" }}
                    src={avatar}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography variant="body1">{name}</Typography>
                  <Typography variant="body1">{email}</Typography>
                </Box>
              </Stack>

              <Box mt={2}>
                <Typography variant="body1" fontSize={15}>
                  {review}
                </Typography>
              </Box>
            </Paper>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default ReviewCards;

const AvatarImg = styled.img`
  width: 30px;
  height: 30px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
